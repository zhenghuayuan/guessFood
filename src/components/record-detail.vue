<template>
	<div class="">
		<div class="record_result_wrap ">
			<div class="record_result_bgc"></div>  <!-- record_wait_bgc  record_fail_bgc -->
			<div class="record_result_data">
				<div class="record_result_time">2016-06-29</div>
				<ul class="record_result_ul">
					<li>
						<div class="m_l5" style="position: absolute;">开奖结果：</div>
						<ul class="food_wrap">
							<food></food>
							<food></food>
							<food></food>
						</ul>
					</li>
					<li>
						<div class="m_l5">竞猜觅钻：</div>
						<div>300觅钻</div>
					</li>
					<li>
						<div class="m_l5">竞猜信息：</div>
						<div>共1组，投3倍</div>
					</li>
					<li>
						<div class="m_l5">竞猜时间：</div>
						<div>2016-11-12 07:54</div>
					</li>
					<li>
						<div class="m_l5" style="position: absolute;">竞猜食物：</div>
						<ul class="food_wrap">
							<food></food>
							<food></food>
							<food></food>
						</ul>
					</li>
					<li>
						<div class="m_l5">获得觅钻：</div>
						<div>15626觅钻</div>
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


	.footer_btn {position: fixed; bottom: 0; width: 100%; word-spacing: 10px;  height: 45px; font-weight: bold; background-color: #28365e; border-top: 1px solid #4c7fb5;  text-align: center;}
	.footer_btn span {display: inline-block; margin-top: 5px; width: 144px; height: 34px; color: #fff; background-color: #ffaa11;line-height: 34px; font-size: 14px; border-radius: 5px;}

</style>
<script>
	import food from './food'
	
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			closeRecordDetial(){
				this.$emit('closeRecordDetial')
			}
		},
		components: {
			food
		}
		
	}
</script>