<script setup>
import { ref } from 'vue';
import { getCityData } from '@/service/modules/city';
import Navbar from './childrenView/navbar.vue'
import SearchContent from './childrenView/searchContent.vue'
import selectCity from './childrenView/selectCity.vue';


// 在这里发送网络请求有连个缺点
// 1. 如果网络请求太多，那么页面中就包含大量的对于网络请求的数据和处理逻辑
// 2. 如果页面封装了很多子组件，子组件需要这些数据，我们必须一步一步将数据传递
// 网络请求--直接返回的就是promise
getCityData().then(res => {
    console.log(res);
})

</script>

<template>
    <!-- 这里的类名是为了取消tabbar -->
    <div class="top-page">

        <!-- 顶部选择目的地 -->
        <navbar></navbar>

        <!-- 搜索框 -->
        <search-content></search-content>

        <!-- 分类选择 -->
        <select-city></select-city>
        
    </div>
</template>

<style scoped lang='less'>

</style>