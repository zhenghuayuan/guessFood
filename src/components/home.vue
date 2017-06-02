<style scoped>
	.header {width: 100%; height: 25vw; background: url(../images/supper_logo_bgc.png) no-repeat center; background-size: 100% 100%;}
	.header_info {height: 30px; line-height: 30px; overflow: hidden; color: #fff; background-color: #28365E;}
	.jump_record_btn, .jump_history_btn {float: right; margin: 5px 10px 0 0; line-height: normal; padding: 2px; background-color: #FFAA11; border-radius: 4px; font-weight: bold;}
	.content {padding-top: 5px; overflow: hidden; background-color: #29467f;}
	.footer {position: fixed; bottom: 0; width: 100%; height: 44px; border-top: 1px solid #1f66b9; background-color: #28365e; font-size: 14px; color: #fff; text-align: center;}
	.footer span {float: left; width: 24%; height: 34px; line-height: 34px; margin: 5px 0 0 8px; background-color: #1e6dc7; border-radius: 4px;}
	.footer em {float: right; width: 68%; height: 34px; line-height: 34px; margin: 5px 8px 0 0; background-color: #ffaa11; border-radius: 4px;}
</style>
<template>
	<div>
		<div class='header'></div>
		<div class='header_info'>
			<span>21:00开奖 倒计时 00:00:00</span>
			<em class='jump_record_btn'>竞猜记录</em>
			<em class='jump_history_btn'>历史开奖</em>
		</div>
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
			<span>随机选择</span>
			<em @click="pushOrder"> {{'至少选三种菜'}} </em>
			<!-- <router-link :to="{'path': 'placeTheOrder', query: {plan: 'private' }}"></router-link> -->
		</div>
	</div>
</template>
<style scoped>
	.header {width: 100%; height: 25vw; background: url(../images/supper_logo_bgc.png) no-repeat center; background-size: 100% 100%;}
	.header_info {height: 30px; line-height: 30px; overflow: hidden; color: #fff; background-color: #28365E;}
	.jump_record_btn, .jump_history_btn {float: right; margin: 5px 10px 0 0; line-height: normal; padding: 2px; background-color: #FFAA11; border-radius: 4px; font-weight: bold;}
	.content {padding-top: 5px; overflow: hidden; background-color: #29467f;}
	.footer {position: fixed; bottom: 0; width: 100%; height: 44px; border-top: 1px solid #1f66b9; background-color: #28365e; font-size: 14px; color: #fff; text-align: center;}
	.footer span {float: left; width: 24%; height: 34px; line-height: 34px; margin: 5px 0 0 8px; background-color: #1e6dc7; border-radius: 4px;}
	.footer em {float: right; width: 68%; height: 34px; line-height: 34px; margin: 5px 8px 0 0; background-color: #ffaa11; border-radius: 4px;}

</style> 

<script>
 	import food from './food';
	export default {
		name: 'home',
		data(){
			return {
				foodItems: []
			}
		},
		created(){
			this.foodItems = JSON.parse(JSON.stringify(this.$store.state.foodItems));
		},
		components: {
			food
		},
		methods: {
			foodActive(item, index){
				item.active = !item.active;
			},
			pushOrder(){
				let _this = this;
				let orderItem = this.foodItems.filter((item)=>item.active)
				this.$store.dispatch('pushOrder', orderItem)
				this.$router.push({path: '/placeTheOrder'})
			}	
		},
	}







</script>
