<template>
	<div>
		<div class='header'></div>
		<div class='header_info'>
			<span>21:00开奖 倒计时 00:00:00</span>
			<em class='jump_record_btn'>竞猜记录</em>
			<em class='jump_history_btn'>历史开奖</em>
		</div>
		<div class='food_wrap'>
			<food 
				v-for='(item,index) in foodItems' 
				:name='item.name' 
				:key=item.index :classname='item.classname' 
				:index='item.index' 
				:hot='item.hot'
				:state = 'item.state'>
			</food>
		</div>
	</div>
</template>
<style scoped>
	.header {width: 100%; height: 25vw; background: url(../images/supper_logo_bgc.png) no-repeat center; background-size: 100% 100%;}
	.header_info {height: 30px; line-height: 30px; overflow: hidden; color: #fff; background-color: #28365E;}
	.jump_record_btn, .jump_history_btn {float: right; margin: 5px 10px 0 0; line-height: normal; padding: 2px; background-color: #FFAA11; border-radius: 4px; font-weight: bold;}
	.food_wrap {padding-top: 5px; overflow: hidden; background-color: #29467f;}
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
			}
		},
		components: {
			food
		},
		methods: {
			
		},
	}
</script>