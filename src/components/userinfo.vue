<template>
	<div class='wrap'>
		<div class='userinfo'>
			<div style="border: 1px solid rgba(0,0,0,0)"></div>
			<div class="userpic"><img :src="userinfo.userpic"></div>
			<div class='username'>{{userinfo.username}}</div>
			<div class="usermizu"><span></span>{{userinfo.mizu}}</div>
		</div>
		<div></div>
		<yd-cell-group>
	        <yd-cell-item arrow>
	            <img class='icon' slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <!-- <span slot="left">我的订单</span> -->
	            <span slot="right"><router-link :to="{'path': 'historyLottery'}">历史开奖</router-link></span>
	        </yd-cell-item>
	        <yd-cell-item arrow>
	            <img class='icon' slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
	            <span slot="right"><router-link :to="{'path': 'myLotteryRecord'}">竞猜记录</router-link></span>
	        </yd-cell-item>
    	</yd-cell-group>
    	<yd-button size="large" type="hollow" @click.native='logout'>退出登录</yd-button>
	</div>
</template>
<style scoped>
	img {width: 100%; height: 100%;}
	.icon {width: 18px;}
	.wrap {position: absolute; width: 100%; height: 100%; background-color: #eeeff0;}
	.userinfo {width: 100%; height: 204px; color: #fff;font-size: 14px; text-align: center; background: url(../images/usercenter_bgc.jpg) no-repeat center; background-size: 100%;}
	.userpic {width: 90px; height: 90px; border-radius: 50%; overflow: hidden; margin: 50px auto 0;}
	.usermizu {}
	.usermizu span {display: inline-block; width: 16px; height: 16px; margin-right: 4px; vertical-align: middle; background: url(../images/mizu_icon.png) no-repeat center; background-size: 20px;}
</style>
<script>
	export default {
		data(){
			return {
				
			}
		},
		created(){
			
		},
		computed: {
			userinfo(){
				return this.$store.state.userinfo;
			}
		},
		methods: {
			logout(){
				this.$store.dispatch('logout', ()=>{
					this.$router.push({path: 'login'})
				})
			}
		}
	}
</script>