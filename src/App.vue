<template>
    <div id="app">
    	<transition name="slide-fade" mode="out-in">
            <keep-alive>
                <router-view v-if='$route.meta.keepAlive'></router-view>
            </keep-alive>
        </transition>
        <transition name="slide-fade" mode="out-in">
            <router-view v-if='!$route.meta.keepAlive'></router-view>
        </transition>
    </div>
</template>

<script>
export default {
	
}
</script>
	
<style>
html>body {font-size: 12px; font-family: 'helvetica'; background-color: #29467f;}
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
