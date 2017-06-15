<template>
	<div>
	    <yd-cell-group>
	        <yd-cell-item>
	            <span slot="left">用户名：</span>
	            <yd-input slot="right" required v-model="username" max="20" placeholder="请输入用户名"></yd-input>
	        </yd-cell-item>
	        <yd-cell-item>
	            <span slot="left">密<span style="visibility: hidden;">占</span>码：</span>
	            <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
	        </yd-cell-item>
	    </yd-cell-group>
	   	<yd-button @click.native="login" style="width: 80%; margin: 0 auto;" size="large" type="primary">登录</yd-button>
	   	
    </div>
</template>
<style scoped>

</style>
<script>
	export default {
		data(){
			return {
				username: '',
                password: ''
			}
		},
		created(){
			// this.$router.push({path: "/"})
		},
		methods: {
			login(){
				var _this = this;
				// console.log(_this.username)
				// console.log(_this.password)
				this.axios.post("/api/login", {
					username: this.username,
					password: this.password
				})
				.then(({data})=>{
					// this.$store.dispatch("setUserinfo", data.body);
					// this.$router.go(0)；
					this.$router.push({path: "/"})
				})
				.catch((e)=>{
					console.log(e)
				})
			}
		}
	}

function setCookie(name, value, expiredays){
	var Days = expiredays;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    arr= document.cookie.match(reg)
    if(arr){
        return (arr[2]);
    }
    else{
        return null;
    }
}
</script>