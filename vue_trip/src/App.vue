
<script setup>
// import TabBar from './components/tabbar/Tabbar.vue';
import TabBar from './components/tabbar/VantTabBar.vue';
import Loading from './components/loading/loading.vue';
// meta 配置
import { useRoute } from 'vue-router';
const route = useRoute()

</script>

<template>
    <div>

        <!-- 占位 -->
        <!-- 首页缓存 -->
        <router-view v-slot="props">
            <keep-alive include="explore">
                <component :is="props.Component"></component>
            </keep-alive>
        </router-view>

        <!-- <RouterView></RouterView> -->
 
        <!-- tabbar -->
        <!-- 隐藏tabbar 的两种方式 -->
        <!-- 1. 城市页面选择 css  -->
        <!-- 2. 搜索页面选择 路由 meta  (这里需要引入route)-->
        <TabBar v-show="!route.meta.hideTabBar"></TabBar>
        <Loading></Loading>

    </div>
</template>

<style scoped lang='less'>
     
</style>