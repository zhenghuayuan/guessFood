<template>
	<div class="wrap ">
		<div class="popou_wrap">
			<div class='popou_bgc'></div>
			<div class='content'>
				<food 
					v-for='(item,index) in items' 
					:key='item.index'
					:name='item.name' 
					:classname='item.classname' 
					:index='item.index' 
					:active = 'true'>
				</food>	
			</div>
			<div class='footer_btn left' @click='closeResult'>返回大厅</div>
			<div class='footer_btn right' @click='jumpMyLotteryRecord'>竞猜记录</div>
		</div>
	</div>
</template>
<style scoped>
	.tx_ov{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
	.wrap {position: absolute;width:100%;height:100%;left:0;top:0;z-index:99;background-color:rgba(0,0,0,0.7);}
	.popou_wrap {position: absolute; left: 6%; top: 150px;width: 88%; height: 148px; background-color: #1e6dc7; border-radius: 7px; }
	.popou_bgc {position: absolute; top: -40%; left: 47%; margin-left: -121px; width: 242px; height: 92px; background: url(../images/supper_result_logo.png) no-repeat center; background-size: 100% 100%;}
	.content {width: 80%; overflow: hidden; margin: 50px auto 0;}
	.content > div {width: 31%;}
	.footer_btn {position: absolute; color: #fff; bottom: -51px; width: 112px; height: 34px; border-radius: 5px; text-align: center; background-color: #1e6dc7; line-height: 34px; font-size: 14px; font-weight: bold;}
	.footer_btn.right {right: 0;}
</style>
<script>
	import food from './food'
	import {mapFood} from '../util'
	export default {
		data(){
			return {
				items: []
			}
		},
		created(){
			this.items = mapFood(this.foodItems, this.lastResult)
		},
		components: {
			food
		},
		computed: {
			foodItems(){
				return this.$store.state.foodItems
			},
			lastResult(){
				return this.$store.state.lastResult
			}
		},
		methods: {
			mapFood,
			closeResult(){
				this.$emit('taggleResultPopou', false)
			},
			jumpMyLotteryRecord(){
				this.closeResult()
				this.$router.push('myLotteryRecord')
			}
		}
	}
</script>