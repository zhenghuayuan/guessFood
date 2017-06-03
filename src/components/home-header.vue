<style>
.home_header {position: relative; width: 100%; height: 25vw; background: url(../images/supper_logo_bgc.png) no-repeat center; background-size: 100% 100%;}
.home_header span {position: absolute; width: 25%; right: 25%; bottom: 21%; text-align: center; font-size: 14px; color: #fff; font-weight: bold;}
.home_header_info {height: 30px; line-height: 30px; overflow: hidden; color: #fff; background-color: #28365E;}
.home_header_info span {padding-left: 1em;}
.jump_record_btn, .jump_history_btn {float: right; margin: 5px 10px 0 0; line-height: normal; padding: 2px; background-color: #FFAA11; border-radius: 4px; font-weight: bold;}

</style>
<template>
	<div>
		<div class='home_header'>
			<span>985246</span>
		</div>
		<div class='home_header_info'>
			<span>21:00开奖 倒计时 00:00:00</span>
			<em class='jump_record_btn'>竞猜记录</em>
			<em class='jump_history_btn'>历史开奖</em>
		</div>
	</div>
</template>
<script>
export default {

}
</script>