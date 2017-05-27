<template>
	<div>
	    <yd-cell-group>
	        <yd-cell-item>
	            <span slot="left">用户名：</span>
	            <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入用户名"></yd-input>
	        </yd-cell-item>
	        <yd-cell-item>
	            <span slot="left">密<span style="visibility: hidden;">占</span>码：</span>
	            <yd-input slot="right" type="password" v-model="input2" placeholder="请输入密码"></yd-input>
	        </yd-cell-item>
	    </yd-cell-group>
	   	<yd-button @click.native="login" style="width: 80%; margin: 0 auto;" size="large" type="primary">登录</yd-button>
	   	
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
				input1: 'zheng',
                input2: '123456'
			}
		},
		methods: {
			login(){
				this.axios.get("/api")
				.then((data)=>{
					console.log(data)
				})
				.catch((e)=>{
					console.log(e)
				})
			}
		}
	}
</script>