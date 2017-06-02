<template>
	<div :class="{'orange': active}">
		<span :class="classname"></span>
		<em><i class="serial">{{index}}</i>{{name}}</em>
		<p v-if="hot">热度：{{hot}}</p>
	</div>
</template>
<style scoped>
	div {float: left; width: 23%; margin: 0 0 5px 1.6%; font-size: 12px; border-radius: 4px; background-color: #1E6DC7; text-align: center;}
	div > * {display: block;}
	span {width: 54px; height: 43px; margin: 0 auto;}
	em {color: #fff;}
	.serial {display: inline-block; color: #fff; font-size: 10px; width: 14px; text-indent: -1px; height: 14px; margin-right: 0.4em; border: 1px solid #fff; text-align: center; line-height: 11px; border-radius: 50%;}
	.orange {background-color: #ffaa11 !important;}
	p {color: #28365e; padding-bottom: 3px; font-size: 10px;}
	.zj {background: url(../images/food/food_zj.png) no-repeat center; background-size: 100%;}
	.mf {background: url(../images/food/food_mf.png) no-repeat center; background-size: 100%;}
	.gz {background: url(../images/food/food_gz.png) no-repeat center; background-size: 100%;}
	.yrc {background: url(../images/food/food_yrc.png) no-repeat center; background-size: 100%;}

	.ss {background: url(../images/food/food_ss.png) no-repeat center; background-size: 100%;}
	.lm {background: url(../images/food/food_lm.png) no-repeat center; background-size: 100%;}
	.kl{background: url(../images/food/food_kl.png) no-repeat center; background-size: 100%;}
	.xlx {background: url(../images/food/food_xlx.png) no-repeat center; background-size: 100%;}

	.xg {background: url(../images/food/food_xg.png) no-repeat center; background-size: 100%;}
	.hg {background: url(../images/food/food_hg.png) no-repeat center; background-size: 100%;}
	.pj {background: url(../images/food/food_pj.png) no-repeat center; background-size: 100%;}
	.sb {background: url(../images/food/food_sb.png) no-repeat center; background-size: 100%;}

	.ps {background: url(../images/food/food_ps.png) no-repeat center; background-size: 100%;}
	.hb {background: url(../images/food/food_hb.png) no-repeat center; background-size: 100%;}
	.nn {background: url(../images/food/food_nn.png) no-repeat center; background-size: 100%;}
	.xj {background: url(../images/food/food_xj.png) no-repeat center; background-size: 100%;}

</style>
<script>
	export default {
		props: ['name', 'index', 'classname', 'hot', 'active']
	}
</script>