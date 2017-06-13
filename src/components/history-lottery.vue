<style scoped>
	.wrap {}
	.history_wrap {padding-bottom: 50px;}
	.history_item_wrap {text-align: center;  padding: 10px; margin-bottom: 4px; background-color: #28365e; border-top: 1px solid #4c7fb5; border-bottom: 1px solid #4c7fb5; }
	.time {display: inline-block; vertical-align: middle; width: 27%; font-size: 14px; color: #fff;}
	.foodItem {display: inline-block; vertical-align: middle; width: 70%; overflow: hidden;}
	.foodItem > div {width: 30%;}
	.luckyuser_info {text-align: left; }
	.luckyuser_info .tit {color: #1a82f1; margin-bottom: 4px;}
	.luckyuser_info .user_wrap {overflow: hidden;}
	.footer_btn {position: fixed; bottom: 0; width: 100%; height: 46px; background-color: #28365e; border-top: 1px solid #4c7fb5;}
	.footer_btn span{display: block; width: 218px; height: 34px; margin: 5px auto 0; background-color: #ffaa11; color: #fff; text-align: center; line-height: 34px; font-size: 14px; border-radius: 5px;}
</style>
<template>
	<div class="wrap">
		<div class='history_wrap'>
			<div v-for='(history, historyIndex) in historyLottory' class="history_item_wrap">
				<div class='time'>{{history.preiods}}</div>
				<div class='foodItem'>
					<food 
						v-for='(item,index) in lotteryFood(history.lotteryOptions)' 
						:key='item.index'
						:name='item.name' 
						:classname='item.classname' 
						:index='item.index' 
						:active = 'item.active'>
					</food>	
				</div>
				<div class="luckyuser_info" v-if='history.lotteryUserList.length>0'>
					<div class="tit">本期中奖用户：</div>
					<div class="user_wrap">
						<user v-for='(item,index) in history.lotteryUserList'
							:key='item.index'
							:name='item.username'
							:age='item.age'
							:sex='item.sex'
							:userpic='item.userpic'>
						</user>
					</div>
				</div>
			</div>
		</div>
		<div class="footer_btn"><span><router-link :to="{'path': '/'}">返回大厅</router-link></span></div>
	</div>
</template>
<script>
	import food from './food'
	import user from './user'
	import {format, mapFood} from '../util'
	export default {
		data(){
			return {
				historyLottory: [],
				foodItems: [],
			}
		},
		created(){
			this.foodItems = JSON.parse(JSON.stringify(this.$store.state.foodItems))
			this.getHistoryLottery()
		},
		computed: {
			foodItems(){
				return this.$store.state.foodItems
			}
		},
		components: {
			food,
			user
		},
		methods: {
			getHistoryLottery(){
				this.axios.get('/api/historyLottery', {})
				.then(({data})=>{
					this.historyLottory = data.body
				})
			},
			lotteryFood(options){
				return mapFood(this.foodItems, options)
			},
		}
	}
</script>