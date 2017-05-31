<template>
	<div>
		<div>用户名：{{userInfo.username}}</div>
		<div>觅钻：{{userInfo.mizu}}</div>
		<div>性别：{{userInfo.sex}}</div>
		<div>年龄：{{userInfo.age}}</div>
		<div>邮箱：{{userInfo.email}}</div>
	</div>
</template>
<style scoped>
	html,body {
		background: #fff;
	}
</style>
<script>
	export default {
		data(){
			return {
				
			}
		},
		created(){
			this.guessFoodInfo()
			if(! ('userid' in this.userInfo)){
				this.getUserInfo()
			}
		},
		computed: {
			userInfo(){
				return this.$store.state.userInfo;
			}
		},
		methods: {
			guessFoodInfo(){
				this.axios.get("/api/guessFoodInfo")
				.then(({data})=>{
					if (data.code == 0) {
						console.log("ok")
					}
				})
				.catch((e)=>{
					console.log(e)
				})
			},
			getUserInfo(){
				this.axios.get("/api/userInfo")
				.then(({data})=>{
					if (data.code == 0) {
						this.$store.dispatch("setUserInfo", data.body)
					}
				})
				.catch((e)=>{
					console.log(e)
				})
			}
		}
	}
</script>