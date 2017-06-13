<style>
	.home_header {position: relative; width: 100%; height: 25vw; background: url(../images/supper_logo_bgc.png) no-repeat center; background-size: 100% 100%;}
	.home_header span {position: absolute; width: 25%; right: 25%; bottom: 21%; text-align: center; font-size: 14px; color: #fff; font-weight: bold;}
	.home_header_info {height: 30px; line-height: 30px; overflow: hidden; color: #fff; background-color: #28365E;}
	.home_header_info span {padding-left: 1em;}
	.jump_record_btn, .jump_history_btn {float: right; margin: 5px 10px 0 0; line-height: normal; padding: 2px; background-color: #FFAA11; border-radius: 4px; font-weight: bold;}
</style>
<template>
	<div>
		<div class='home_header'>
			<span>985246</span>
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
				serverCurrentTime: 0,
				clientCurrentTime: 0,
				countDown: '00:00',
				calcuCountDown: null
			}
		},
		created(){
			this.calcuCountDown = new CalcuCountDown(this)
			this.userinfo()
			this.guessinfo()
			this.openlotteryResult()
		},
		methods: {
			guessinfo(){
				this.axios.get('/api/guessinfo')
				.then(({data})=>{
					if (data.code == 0) {
						let body = data.body
						this.targetOpenLottery = format(body.newestOpenLotteryTime, 'hh:mm')
						this.calcuCountDown.start(+new Date(), body.serverCurrentTime, body.newestOpenLotteryTime, this.countDown)
						this.$store.dispatch('setPreiods', body.currentPreiods)
					}
				})
				.catch(e=>{
					console.log(`错误:${e}`)
				})
			},
			userinfo(){
				this.axios.get('/api/userinfo')
				.then(({data})=>{
					if (data.code == 0) {
						this.$store.dispatch("setUserInfo", data.body);
					}
				})
				.catch(e=>{
					console.log(e)
				})
			},
			openlotteryResult(){
				this.axios.get('/api/openlotteryResult')
				.then(({data})=>{
					console.log(data)
				})	
				.catch(e=>{
					console.log(e)
				})
			}
		}
	}
	function CalcuCountDown(component){
		var timer = null
		var run = function (target, errorMs){
			return setInterval(()=>{
				component.countDown = format(target - (+new Date() + errorMs), 'mm:ss')
			}, 1000)
		}
		var calcuError = function(client, server){
			// var wucha = 0
			// if (client > server) {
			// 	wucha = -(client - server)
			// }else{
			// 	wucha = server - client
			// }
			return server - client
		}
		this.start = function(client, server, target){	
			timer && this.destroy()
			var errorMs = calcuError(client, server)
			timer = run(target, errorMs)
		}
		this.destroy = function(){
			clearInterval(timer)
			timer = null
		}
	}

// console.log(res)
// res: {
// 	serverCurrentTime: 当前毫秒数,
// 	newestOpenLotteryTime: 开奖时间毫秒数,
// 	lotteryPool: "奖池"，
// 	mizu: ,
// }



</script>
