<template>
    <div id="app">
    	<transition name="slide-fade" mode="out-in">
        	<router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
	
}
</script>
	
<style>
html, body{font-size: 12px; font-family: 'helvetica';}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter {
	transform: translateX(100%);
	opacity: 0;
}
.slide-fade-leave-to {
	transform: translateX(-100%);
	opacity: 0;
}
</style>
