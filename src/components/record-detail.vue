<template>
	<div class="">
		<div class="record_result_wrap ">
			<div :class='lotteryLogo(curRecords.status)'></div>  <!-- record_wait_bgc  record_fail_bgc -->
			<div class="record_result_data">
				<div class="record_result_time">{{format(curRecords.createTime, 'yyyy-MM-dd hh:mm')}}</div>
				<ul class="record_result_ul">
					<li v-if='curRecords.lotteryOptions'>
						<div class="m_l5" style="position: absolute;">开奖结果：</div>
						<ul class="food_wrap">
							<food 
								v-for='(item, index) in lotteryFood(curRecords.lotteryOptions)' 
								:key='item.index'
								:name='item.name' 
								:classname='item.classname' 
								:index='item.index' 
								:active = 'true'>
							</food>	
						</ul>
					</li>
					<li>
						<div class="m_l5">竞猜觅钻：</div>
						<div>{{curRecords.betMizu}}觅钻</div>
					</li>
					<li>
						<div class="m_l5">竞猜信息：</div>
						<div>共{{curRecords.betGrounp}}组，投1倍</div>
					</li>
					<li>
						<div class="m_l5">竞猜时间：</div>
						<div>{{format(curRecords.createTime, 'yyyy-MM-dd hh:mm')}}</div>
					</li>
					<li>
						<div class="m_l5" style="position: absolute;">竞猜食物：</div>
						<ul class="food_wrap">
							<food 
								v-for='(item, index) in lotteryFood(curRecords.betOptions)' 
								:key='item.index'
								:name='item.name' 
								:classname='item.classname' 
								:index='item.index' 
								:active ='mapHit(item.classname)'>
							</food>	
						</ul>
					</li>
					<li>
						<div class="m_l5">获得觅钻：</div>
						<div>{{curRecords.betMizu}}觅钻</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="footer_btn">
			<span @click="closeRecordDetial">返回竞猜记录</span>
			<span><router-link :to="{'path': '/'}">返回大厅</router-link></span>
		</div>
	</div>
</template>
<script>
	import food from './food'
	import {format, mapFood} from '../util'
	export default {
		data(){
			return {
			}
		},
		props: ['curRecords'],
		computed: {
			foodItems(){
				return this.$store.state.foodItems
			}
		},
		created(){

		},
		methods: {
			format,
			closeRecordDetial(){
				this.$emit('closeRecordDetial')
			},
			lotteryFood(options){
				return mapFood(this.foodItems, options)
			},
			mapHit(food){
				var lotteryOptions = this.curRecords.lotteryOptions
				return lotteryOptions.some(item =>item == food)
			},
			lotteryLogo(status){
				switch(status){
					case 1:
					return 'record_wait_bgc'
					case 2:
					return 'record_fail_bgc'
					case 3:
					return 'record_result_bgc'
				}
			}
		},
		components: {
			food
		}
	}
</script>
<style scoped>
	/*我的记录详情*/
	.record_result_wrap {padding-bottom: 46px;}
	.record_result_data {background-color: #28365e;}
	.record_result_bgc {height: 107px; margin-bottom: 8px; background: url(../images/record_success_bgc.png) no-repeat center; background-size: 100% 100%;}
	.record_wait_bgc {height: 107px; margin-bottom: 8px; background: url(../images/record_wait_bgc.png) no-repeat center; background-size: 100% 100%;}
	.record_fail_bgc {height: 107px; margin-bottom: 8px; background: url(../images/record_fail_bgc.png) no-repeat center; background-size: 100% 100%;}
	.record_result_time {padding: 8px; font-size: 14px; color: #fff; border-bottom: 1px solid #4c7fb5;}
	.record_result_ul {padding: 5px 0 5px 20px; border-bottom: 1px solid #4c7fb5;}
	.record_result_ul li {position: relative; overflow: hidden; color: #fff; margin-bottom: 5px;}
	.record_result_ul > li > * {float: left;}
	.record_tipls_msg {text-align: center; margin-top: 200px; color: #fff;}
	.food_wrap {margin-left: 60px; width: 80%;}
	.footer_btn {position: fixed; bottom: 0; width: 100%; word-spacing: 10px; height: 45px; font-weight: bold; background-color: #28365e; border-top: 1px solid #4c7fb5;  text-align: center;}
	.footer_btn span {display: inline-block; margin-top: 5px; width: 144px; height: 34px; color: #fff; background-color: #ffaa11; line-height: 34px; font-size: 14px; border-radius: 5px;}
</style>