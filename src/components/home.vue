<style scoped>
	.jump_record_btn, .jump_history_btn {float: right; margin: 5px 10px 0 0; line-height: normal; padding: 2px; background-color: #FFAA11; border-radius: 4px; font-weight: bold;}
	.content {padding-top: 5px; overflow: hidden; background-color: #29467f;}
	.footer {position: fixed; bottom: 0; width: 100%; height: 44px; border-top: 1px solid #1f66b9; background-color: #28365e; font-size: 14px; color: #fff; text-align: center;}
	.footer span {float: left; width: 24%; height: 34px; line-height: 34px; margin: 5px 0 0 8px; background-color: #1e6dc7; border-radius: 4px;}
	.footer em {float: right; width: 68%; height: 34px; line-height: 34px; margin: 5px 8px 0 0; background-color: #ffaa11; border-radius: 4px;}
</style>
<template>
	<div>
		<home-header @taggleResultPopou='taggleResultPopou'></home-header>
		<open-lottery-result v-if='isShowResult' @taggleResultPopou='taggleResultPopou'></open-lottery-result>
		<div class='content'>
			<food 
				v-for='(item, index) in foodItems' 
				:name='item.name' 
				:key=item.index 
				:classname='item.classname' 
				:index='item.index' 
				:hot='item.hot'
				:active = 'item.active'
				@click.native='foodActive(item, index)'>
			</food>
		</div>
		<div class='footer'>
			<span @click='randActive'>随机一组</span>
			<em @click="jumpOrder"> {{jumpOrderBtnText}} </em>
			<!-- <router-link :to="{'path': 'placeTheOrder', query: {plan: 'private' }}"></router-link> -->
		</div>
	</div>
</template>
<script>
	import food from './food'
	import homeHeader from './home-header'
	import openLotteryResult from './openlottery-result'

	import {calcuZu, randomNoRepeat} from '../util'
	export default {
		name: 'home',
		data(){
			return {
				foodItems: [],
				jumpOrderBtnText: '',
				isShowResult: false,
			}
		},
		created(){
			this.foodItems = JSON.parse(JSON.stringify(this.$store.state.foodItems))
		},
		computed: {
			orderItem(){
				let order = this.foodItems.filter((item)=>item.active)
				return [...JSON.parse(JSON.stringify(order))]
			}
		},
		components: {
			homeHeader,
			food,
			openLotteryResult
		},
		watch: {
			orderItem(news){
				let len = news.length
				if(news.length >= 3){
					this.jumpOrderBtnText = len+'道菜，共'+calcuZu(len)+'单，下一步'
				}else{
					this.jumpOrderBtnText = "至少选三种菜"
				}
			}
		},
		methods: {
			foodActive(item, index){
				item.active = !item.active;
			},
			randActive(){
				this.resetFoodItems();
				randomNoRepeat(3,0,15).forEach((item)=>{
					this.foodItems[item].active = true;
				})
			},
			jumpOrder(){
				var len = this.orderItem.length;
				if(len >= 3){
					this.$store.dispatch('pushOrder', this.orderItem)
					this.$router.push({path: '/placeTheOrder'})
					this.resetFoodItems()
				}else{
					this.randActive()
				}
			},
			resetFoodItems(){
				this.foodItems.forEach((item)=>{
					item.active = false;
				})
			},
			taggleResultPopou(bool){
				this.isShowResult = bool
			}
		},
	}


</script>
