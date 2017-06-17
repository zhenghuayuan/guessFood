<style>
	.home_header {position: relative; width: 100%; height: 25vw; background: url(../images/supper_logo_bgc.png) no-repeat center; background-size: 100% 100%;}
	.home_header .jump_userinfo {position: absolute; right: 10px; top: 1px; width: 20px; height: 20px; background: url(../images/user_icon.png) no-repeat center; background-size: 100% 100%;}
	.home_header .lottery_pool {position: absolute; width: 25%; right: 25%; bottom: 21%; text-align: center; font-size: 14px; color: #fff; font-weight: bold;}
	.home_header_info {height: 30px; line-height: 30px; overflow: hidden; color: #fff; background-color: #28365E;}
	.home_header_info span {padding-left: 1em;}
	.jump_record_btn, .jump_history_btn {float: right; margin: 5px 10px 0 0; line-height: normal; padding: 2px; background-color: #FFAA11; border-radius: 4px; font-weight: bold;}
</style>
<template>
	<div>
		<div class='home_header'>
			<em class='jump_userinfo' @click='jumpUserinfo'></em>
			<span class='lottery_pool' @click='openlotteryResult'>{{lotteryPool}}</span>
		</div>
		<div class='home_header_info'>
			<span>开奖：{{targetOpenLottery}} 倒计时：{{countDown}} </span>
			<em class='jump_record_btn'><router-link :to="{'path': 'myLotteryRecord', query: {plan: '' }}">竞猜记录</router-link></em>
			<em class='jump_history_btn'><router-link :to="{'path': 'historyLottery', query: {plan: '' }}">历史开奖</router-link></em>
		</div>
	</div>
</template>
<script>
	import {format} from '../util'
	export default {
		data(){
			return {
				targetOpenLottery: '00:00', // 开奖时间
				// serverCurrentTime: 0,
				// clientCurrentTime: 0,
				countDown: '00:00',
				loopOpenlottery: true, // 控制开奖请求（节流）
				isOpenPopou: true // 打开开奖结果（节流）

			}
		},
		created(){
			this.guessinfo()
			// console.log(this.$parent.$data.foodItems)
		},
		computed: {
			userinfo(){
				return this.$store.state.userInfo
			},
			currentPreiods(){
				return this.$store.state.currentPreiods
			},
			lotteryPool(){
				return this.$store.state.lotteryPool
			}
		},
		methods: {
			guessinfo(){
				this.axios.get('/api/guessinfo')
				.then(({data})=>{
					let _this = this
					let body = data.body
					this.targetOpenLottery = format(body.newestOpenLotteryTime, 'hh:mm')
					SingleCalcuCountDown().start({
						client: +new Date(), 
						server: body.serverCurrentTime, 
						target: body.newestOpenLotteryTime,
						callback: _this.listenerGame
					})
					// this.$store.dispatch('setPreiods', body.currentPreiods)
					this.$store.state.currentPreiods = body.currentPreiods
					this.$store.state.lastPreiods = body.lastPreiods
					this.$store.state.lastResult = body.lastResult
					this.$store.state.lotteryPool = body.lotteryPool
				})
				.catch(e=>{
					console.log(e)
				})
			},
			// 倒计时流程控制
			listenerGame(serverNowMs, countDownMs){
				// 服务器当前时间：serverNowMs 倒计时剩余时间：countDownMs
				this.countDown = format(countDownMs, 'mm:ss')
				let remainMiao = Math.floor(countDownMs/1000)

				// 
				if(remainMiao >= 60*30){
					this.isOpenPopou && this.openResultPopou()
				}else if (remainMiao >= 0 && remainMiao <= 10) {
					console.log(`最后倒计时：${remainMiao}`)
					// this.loopOpenlottery && this.openlotteryResult(this.currentPreiods)
				}else if(remainMiao < 0) {
					console.log(`小于0倒计时：${remainMiao}`)
					this.guessinfo()
				}
			},
			openlotteryResult(preiods){
				this.loopOpenlottery = false
				this.axios.get('/api/openlotteryResult', {
					params: {
						preiods: preiods
					}
				})
				.then(({data})=>{
					var body = data.body
					if (body.length == 0) {
						this.loopOpenlottery = true
					}else{
						setTimeout(()=>{
							this.loopOpenlottery = true
						}, 60*1000)
					}
					console.log('开奖:'+JSON.stringify(data))
				})	
				.catch(e=>{
					console.log(e)
				})
			},
			openResultPopou(){
				this.isOpenPopou = false
				setTimeout(()=>{
					this.isOpenPopou = true
				}, 30*1000*60)
				this.$emit('taggleResultPopou', true)
			},
			jumpUserinfo(){
				this.$router.push({path: 'userinfo'})
			}
		}
	}
	
	var SingleCalcuCountDown = function(){
		let box = null
		function CalcuCountDown(){
			let timer = null
			function run(client, server, target, callback){
				return setInterval(()=>{
					let serverNowMs = +new Date() + (server - client)
					let countDownMs = target - serverNowMs
					callback(serverNowMs, countDownMs)
				}, 1000)
			}
			this.start = function({client, server, target, callback}){
				timer && clearInterval(timer)
				timer = run(client, server, target, callback)
			}
		}
		return function(){
			return box || (box = new CalcuCountDown())
		}
	}()
	
// console.log(res)
// res: {
// 	serverCurrentTime: 当前毫秒数,
// 	newestOpenLotteryTime: 开奖时间毫秒数,
// 	lotteryPool: "奖池"，
// 	mizu: ,
// }



</script>
