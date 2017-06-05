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
			<em class='jump_record_btn'>竞猜记录</em>
			<em class='jump_history_btn'>历史开奖</em>
		</div>
	</div>
</template>
<script>
	import {format} from '../tool'
	export default {
		data(){
			return {
				targetOpenLottery: '00:00', // 开奖时间
				serverCurrentTime: 0,
				clientCurrentTime: 0,
				countDown: '00:00:00',
				box: null
			}
		},
		created(){
			console.log(this._data.countDown = 1)
			this.guessinfo()
			this.box = new CalcuCountDown(this, 'countDown')
		},
		methods: {
			guessinfo(){
				this.axios.get('/api/guess-info')
				.then(({data})=>{
					if (data.code == 0) {
						let body = data.body
						this.targetOpenLottery = format(body.newestOpenLotteryTime, 'hh:mm')
						this.box.start(+new Date(), body.serverCurrentTime, body.newestOpenLotteryTime, this.countDown)
					}
				})
				.catch(e=>{
					console.log(e)
				})
			}
		}
	}
	function CalcuCountDown(vm, key){
		var timer = null
		var run = function (target, mvvm, errorMs){
			return setInterval(()=>{
				vm[key] = format(target - (+new Date()) + errorMs, 'hh:mm:ss')
				console.log(target - (+new Date()))
			}, 1000)
		}
		var calcuError = function(client, server){
			return client - server
		}
		return {
			start(client, server, target, mvvm){
				clearInterval(timer)
				var errorMs = calcuError(client, server)
				timer = run(target, mvvm, errorMs)

			}	
		}
	}
// res: {
// 	serverCurrentTime: 当前毫秒数,
// 	newestOpenLotteryTime: 开奖时间毫秒数,
// 	lotteryPool: "奖池"，
// 	mizu: ,
// }
</script>