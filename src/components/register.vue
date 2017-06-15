<template>
	<div>
	    <yd-cell-group>
	        <yd-cell-item>
	            <span slot="left">用户名：</span>
	            <yd-input slot="right" v-model="username" required max="20" placeholder="请输入用户名"></yd-input>
	        </yd-cell-item>
	         <yd-cell-item>
	            <span slot="left">密<span style="visibility: hidden;">占</span>码：</span>
	            <yd-input slot="right" v-model="password" required max="20" type="password" placeholder="请输入密码"></yd-input>
	        </yd-cell-item>
	        <yd-cell-item>
	            <span slot="left">邮<span style="visibility: hidden;">占</span>箱：</span>
	            <yd-input slot="right" v-model="email" :debug="true" regex="email" placeholder="请输入邮箱地址"></yd-input>
	        </yd-cell-item>
	    </yd-cell-group>
		<yd-button @click.native="register" style="width: 80%; margin: 0 auto;" size="large" type="primary">注册</yd-button>
	</div>
</template>
<style scoped>
	html {
		visibility: hidden; 
	}
</style>
<script>
	export default {
		data(){
			return {
            	username: '',
				password: '',
				email: '',
			}
		},
		computed: {
			domain(){
				return this.$store.getters.domain;
			}
		},
		created(){
			setTimeout(()=>{
				this.username = this.domain;
				console.log(this.domain)
			}, 100)
		},
		methods: {
			register(){
				const _this = this;
				this.axios.post("/api/register", {
					username: _this.username,
					password: _this.password,
					email: _this.email
				})
				.then(({data})=>{
					this.$router.replace({path: "/login"})
					
				})
				.catch((e)=>{
					console.log(e)
				})
			}
		}
	}
</script>