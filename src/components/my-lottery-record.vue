<template>
	<div class='wrap'>
		<record-detail v-if='isShowDetail' :curRecords = 'curRecords' @closeRecordDetial='isShowDetail = false'></record-detail>	
		<template v-else>
			<ul class='record_wrap'>
				<li v-for='item in records' @click='isShowDetail = true && (curRecords = item)' class='record_li'>
					<div class='record_li_top'>
						<span>{{format(item.createTime, 'yyyy-MM-dd hh:mm')}}</span>
						<em class='orange' :class='lotteryClass(item.status)'>{{lotteryStatus(item.status)}}</em>
					</div>
					<div class='record_li_bottom'>
						<span>{{format(item.createTime, 'hh:mm')}}</span>
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
	.gray {color: #ccc;}

</style>
<script>
	import recordDetail from './record-detail'
	import {format} from '../util'

	function ScrollLoad({pubContainer, subContainer, down}){
		down()
		function delay(){
			let timer = null
			let pubHeight = pubContainer.clientHeight
			return function(){
				if (timer) return
				timer = setTimeout(()=>{
					timer = null
				}, 300)
				if (pubContainer.scrollTop >= (subContainer.clientHeight - pubContainer.clientHeight) - 20) {
					down()
				}

			}
		}
		pubContainer.onscroll = delay()
	}
	export default {
		data(){
			return {
				isShowDetail: false,
				foodItems: [],
				records: [], 
				curRecords: {},
				hasMore: true, 
				limit: {
					page: 0,
					size: 10
				}
			}
		},
		created(){
			this.foodItems = JSON.parse(JSON.stringify(this.$store.state.foodItems))
			// this.lotteryRecord()
		},
		mounted(){
			var _this = this;
			new ScrollLoad({
				pubContainer: document.body,
				subContainer: document.querySelector('.record_wrap'),
				down(){
					if (!_this.hasMore) return
					_this.hasMore = false
					_this.axios('/api/lotteryRecord', {
						params: {
							page: _this.limit.page,
							size: _this.limit.size
						}
					})
					.then(({data})=>{
						if (data.code == 0) {
							_this.records = _this.records.concat(data.body)
							_this.limit.page ++
							if (data.body.length > 0) {
								_this.hasMore = true
							}
						}
					})
					.catch(e=>{
						console.log(e)
					})
				}
			})
		},
		components: {
			recordDetail
		},
		methods: {
			format,
			lotteryStatus(status){
				switch(status){
					case 1:
					return '等待开奖'
					case 2:
					return '未猜中'
					case 3:
					return '猜中啦'
				}
			},
			lotteryClass(status){
				switch(status){
					case 1:
					return 'green'
					case 2:
					return 'gray'
					case 3:
					return 'orange'
				}
			},
			// orderTime(createTime){
			// 	return format(createTime, 'yyyy-MM-dd hh:mm')
			// },
			lotteryRecord(){
			
			},
			
		}
	}
	
</script>