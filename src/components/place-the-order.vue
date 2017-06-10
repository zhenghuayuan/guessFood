<style scoped>
.order_header {position: fixed; z-index: 1; top: 0; width: 100%; height: 50px; border-bottom: 1px solid #1f66b9; background: #28365e;}
.order_header span {float: left; margin-top: 7px; height: 35px; border-radius: 4px; color: #fff; text-align: center; line-height: 35px; font-size: 14px;}
.order_header span:nth-child(1) {width: 26%; background-color: #1e6dc7; margin-left: 2%;} 
.order_header span:nth-child(2),
.order_header span:nth-child(3) {float: right; text-indent: 0.5em; width: 32%; border: 1px solid #1f66b9; margin-right: 2%; background: url(../images/betting_icon.png) no-repeat 13% 7px; background-size: 16px;}
.content {padding: 50px 0;}
.order_item {position: relative; padding-right: 16%; padding-top: 5px; overflow: hidden; background-color: #ffaa11; margin-top: 6px;}
.order_item span {position: absolute; color: #fff; font-size: 16px; border-radius: 50%; border: 1px solid #fff; top: 0; bottom: 0; margin: auto 0;  right: 12px; width: 30px; height: 30px; text-align: center; line-height: 28px;}
.footer {position: fixed; bottom: 0; width: 100%; height: 50px; border-top: 1px solid #1f66b9; background-color: #28365e;}
.footer span {height: 34px; border-radius: 4px; line-height: 34px; text-align: center; font-size: 14px; color: #fff;}
.footer span:nth-child(1) {float: left; width: 36%; margin: 7px 0 0 2%; background-color: #1e6dc7;}
.footer span:nth-child(2) {float: right; width: 56%; margin: 7px 2% 0 0; background-color: #ffaa11; font-weight: bold;}
.mizu_wrap > * {display: inline-block; vertical-align: middle;}
.mizu_wrap i {width: 20px; height: 20px; background: url(http://pub.froup.net/hoomic/H5/game/pubData/images/mizu_icon.png) no-repeat center; background-size: 100%;}
.mizu_wrap b {width: 18px; height: 18px; background: url(http://pub.froup.net/hoomic/H5/game/pubData/images/adventure_add_mizu.png) no-repeat center; background-size: 100%;}
.mizu_wrap p {min-width: 3em; text-align: left;}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
	transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
	opacity: 0;
	transform: translateX(-100%);
}
</style>
<template>
	<div> 
		<div class="order_header">
			<span><router-link :to="{path: '/'}">上一步</router-link></span>
			<span><router-link :to="{path: '/'}">自选一组</router-link></span>
			<span @click="randActive">随机一组</span>
		</div>
		<transition-group class="content" name="list" tag="div" mode="out-in">
			<template v-for="(items, indexs) in orderItems" >
				<div class="order_item" :key="items">
					<food 
						v-for='(item,index) in items' 
						:key='item.index'
						:name='item.name' 
						:classname='item.classname' 
						:index='item.index' 
						:active = 'item.active'>
					</food>	
					<span @click="delOrderItems(items, indexs)">×</span>
				</div>
			</template>
		</transition-group>
		<div class="footer">
			<span class='mizu_wrap'>
				<i></i>
				<p>99888</p>
				<b></b>
			</span>
			<span @click="confirmOrder">立即投入{{total}}觅钻</span>
		</div>
	</div>
</template>
<script>
import food from './food'
import {calcuZu, randomNoRepeat} from '../util'

export default {
	data(){
		return {
			foodItems: [],
			total: 0 // 合计
		}
	},
	created(){
		this.foodItems = JSON.parse(JSON.stringify(this.$store.state.foodItems))
		this.countTotal()
	},
	computed: {
		orderItems(){
			return this.$store.state.orderItems
		},
		currentPreiods(){
			return this.$store.state.currentPreiods
		}
	},
	watch: {
		orderItems(){
			this.countTotal()
		}
	},
	components: {
		food
	},
	methods: {
		delOrderItems(item, index){
			this.$store.dispatch('delOrderItems', index)
		},
		randActive(){
			let arr = [];
			randomNoRepeat(3,0,15).forEach(item=>{
				this.foodItems[item].active = true;
				arr.push(this.foodItems[item]);
			})
			this.$store.dispatch('pushOrder', arr);
		},
		confirmOrder(){
			if (this.orderItems.length == 0) return;
			this.axios.post('/api/confirm-order', {
				preiods: this.currentPreiods,
				options: this.optionsFormat(this.orderItems)
			})
			.then(function(){
				console.log("ok")
			})
			.catch(function(e){
				console.log(e)
			})
		},
		// 数据格式化 => [['','',''],['','','']]
		optionsFormat(orderItems){
			let options = []
			for (let i = 0; i < this.orderItems.length; i++) {
				let arr = []
				for (let j = 0; j < this.orderItems[i].length; j++) {
					arr.push(this.orderItems[i][j]['classname'])
				}
				options.push(arr)
			}
			return JSON.stringify(options)
		},
		// 合计计算
		countTotal(){
			let zu = 0
			let orderItems = this.orderItems
			if(orderItems.length == 0){
				this.total = 0
			}else{
				orderItems.forEach(item=>zu+=calcuZu(item.length))
				this.total = this.$store.state.PRICE * zu
			}
		}
	},
}

</script>