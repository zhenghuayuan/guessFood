<template>
	<div class="userinfo">
		<div class="userpic"><img :src='userpic'></div>
		<div class="name tx_ov">{{name}}</div>
		<div class="sex_age" :class='sex=="1"?"boy":"girl"' >{{age}}</div>
	</div>
</template>
<style scoped>
	.tx_ov{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
	.userinfo {position: relative; float: left; width: 31%; height: 40px; margin-right: 2%;}
	.userinfo .userpic {position: absolute; width: 35px; height: 35px; border-radius: 50%; overflow: hidden;} 
	.userinfo .userpic img {width: 100%; height: 100%;}
	.userinfo .name {margin-left: 40px; color: #fff; font-size: 12px;}
	.userinfo .sex_age {margin-left: 40px; margin-top: 4px; width: 34px; border-radius: 2px; text-indent: 16px;}
	.boy {background: #66b7e6 url(../images/sex_boy.png) no-repeat 3px center; color: #fff; background-size: 12px;}
	.girl {background: #ec5849 url(../images/sex_girl.png) no-repeat 3px center; color: #fff; background-size: 12px;}

</style>
<script>
	export default {
		props: ['name', 'age', 'sex', 'userpic']
	}
</script>