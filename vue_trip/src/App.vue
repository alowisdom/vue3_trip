
<script setup>
// import TabBar from './components/tabbar/Tabbar.vue';
import TabBar from './components/tabbar/VantTabBar.vue';
// meta 配置
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
    <div>

        <!-- 占位 -->
        <RouterView></RouterView>

        <!-- tabbar -->
        <!-- 隐藏tabbar 的两种方式 -->
        <!-- 1. 城市页面选择 css  -->
        <!-- 2. 搜索页面选择 路由 meta  (这里需要引入route)-->
        <TabBar v-if="!route.meta.hideTabBar"></TabBar>

    </div>
</template>

<style scoped lang='less'>
     
</style>