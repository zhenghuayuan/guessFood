<template>
	<div class='wrap'>
		<record-detail v-if='isShowDetail' @closeRecordDetial='isShowDetail = false'></record-detail>	
		<template v-else>
			<ul class='record_wrap'>
				<li v-for='item in records' @click='isShowDetail = true' class='record_li'>
					<div class='record_li_top'>
						<span>{{orderTime(item.createTime).slice(0, 10)}}</span>
						<em class='orange'>等待开奖</em>
					</div>
					<div class='record_li_bottom'>
						<span>{{orderTime(item.createTime).slice(-5)}}</span>
						<em>支付{{item.betMizu}}觅钻</em>
					</div>
				</li>
			</ul>
			<div class='footer_btn'><span><router-link :to='{"path": "/"}'>返回大厅</router-link></span></div>
		</template>
		
	</div>
</template>
<style scoped>
	.wrap {}
	.record_wrap {padding-bottom: 50px;}
	.record_li {padding: 16px 8px; background-color: #28365e; border-bottom: 1px solid #4c7fb5;}
	.record_li_top {overflow: hidden; font-size: 14px; color: #fff; margin-bottom: 5px;}
	.record_li_top span {float: left;}
	.record_li_top em {float: right;}
	.record_li_bottom {overflow: hidden; color: #1e6dc7;}
	.record_li_bottom span {float: left;}
	.record_li_bottom em {float: right;}
	.footer_btn {position: fixed; bottom: 0; width: 100%; height: 46px; background-color: #28365e; border-top: 1px solid #4c7fb5;}
	.footer_btn span{display: block; width: 218px; height: 34px; margin: 5px auto 0; background-color: #ffaa11; color: #fff; text-align: center; line-height: 34px; font-size: 14px; border-radius: 5px;}
	.orange {color: #ffae1d;}
	.green {color: #86c9af;}

</style>
<script>
	import recordDetail from './record-detail'
	import {format} from '../util'
	export default {
		data(){
			return {
				isShowDetail: false,
				foodItems: [],
				records: [], 
				limit: {
					page: 0,
					size: 10
				}
			}
		},
		created(){
			this.foodItems = JSON.parse(JSON.stringify(this.$store.state.foodItems))
			this.lotteryRecord()
		},
		computed: {

			
		},
		components: {
			recordDetail
		},
		methods: {
			orderTime(createTime){
				return format(createTime, 'yyyy-MM-dd hh:mm')
			},
			lotteryRecord(){
				this.axios('/api/lotteryRecord', {
					params: {
						page: this.limit.page,
						size: this.limit.size
					}
				})
				.then(({data})=>{
					if (data.code == 0) {
						this.records = this.records.concat(data.body)
						this.limit.page ++
					}
				})
				.catch(e=>{
					console.log(e)
				})
			}
		}
	}
	
</script>