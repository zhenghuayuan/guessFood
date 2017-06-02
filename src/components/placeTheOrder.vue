<template>
	<div>
		<div class="header">
			<span><router-link :to="{path: '/'}">上一步</router-link></span>
			<span>自选一组</span>
			<span>随机选择</span>
		</div>
		<div class="content">
			<template v-for="items in orderItems">
				<div class="order_item">
					<food 
						v-for='(item,index) in items' 
						:key='item.index'
						:name='item.name' 
						:classname='item.classname' 
						:index='item.index' 
						:active = 'item.active'>
					</food>	
				</div>
			</template>
		</div>
		<div class="footer">
			<span class='mizu_wrap'>
				<i></i>
				<p>99888</p>
				<b></b>
			</span>
			<span>立即投入200觅钻</span>
		</div>
	</div>
</template>
<style scoped>
	.header {position: fixed; top: 0; width: 100%; height: 50px; border-bottom: 1px solid #1f66b9; background-color: #28365e;}
	.header span {float: left; margin-top: 7px; height: 35px; border-radius: 4px; color: #fff; text-align: center; line-height: 35px; font-size: 14px;}
	.header span:nth-child(1) {width: 26%; background-color: #1e6dc7; margin-left: 2%;} 
	.header span:nth-child(2),
	.header span:nth-child(3) {float: right; text-indent: 0.5em; width: 32%; border: 1px solid #1f66b9; margin-right: 2%; background: url(../images/betting_icon.png) no-repeat 13% 7px; background-size: 16px;}

	.content {padding: 50px 0;}
	.order_item {width: 80%; overflow: hidden;}
	
	.footer {position: fixed; bottom: 0; width: 100%; height: 50px; border-top: 1px solid #1f66b9; background-color: #28365e;}
	.footer span {height: 34px; border-radius: 4px; line-height: 34px; text-align: center; font-size: 14px; color: #fff;}
	.footer span:nth-child(1) {float: left; width: 36%; margin: 7px 0 0 2%; background-color: #1e6dc7;}
	.footer span:nth-child(2) {float: right; width: 56%; margin: 7px 2% 0 0; background-color: #ffaa11; font-weight: bold;}
	.mizu_wrap > * {display: inline-block; vertical-align: middle;}
	.mizu_wrap i {width: 20px; height: 20px; background: url(http://pub.froup.net/hoomic/H5/game/pubData/images/mizu_icon.png) no-repeat center; background-size: 100%;}
	.mizu_wrap b {width: 18px; height: 18px; background: url(http://pub.froup.net/hoomic/H5/game/pubData/images/adventure_add_mizu.png) no-repeat center; background-size: 100%;}
	.mizu_wrap p {min-width: 3em; text-align: left;}

</style>

<script>
 	import food from './food';
	export default {
		data(){
			return {

			}
		},
		created(){

		},
		computed: {
			foodItems(){
				return this.$store.state.foodItems;
			},
			orderItems(){
				return this.$store.state.orderItems;
			}
		},
		components: {
			food
		},
		methods: {
			foodActive(item, index){
				item.active = !item.active;
			}	
		},
	}

</script>