<script setup>
import Navbar from './childrenView/navbar.vue'
import SearchContent from './childrenView/searchContent.vue'
import selectCity from './childrenView/selectCity.vue';
import { useCityStore } from '@/store/modules/city';
import { toRefs } from 'vue';


// 在这里发送网络请求有连个缺点
// 1. 如果网络请求太多，那么页面中就包含大量的对于网络请求的数据和处理逻辑
// 2. 如果页面封装了很多子组件，子组件需要这些数据，我们必须一步一步将数据传递
// 网络请求--直接返回的就是promise
// getCityData().then(res => {
//     // 不用在这里获取数据
// })


// 从store中获取数据
const cityStore = useCityStore()
// 调用actions 中的方法，发起网络请求
cityStore.fetchCitiesAction()
const { cities } = toRefs(cityStore)



</script>

<template>
    <!-- 这里的类名是为了取消tabbar -->
    <div class="top-page">

        <!-- navbar返回 -->
        <navbar class="navbar"></navbar>

        <!-- 搜索框 -->
        <search-content class="search-content"></search-content>

        <!-- 分类选择 -->
        <select-city class="select-content" :cities="cities"></select-city>
        

    </div>
</template>

<style scoped lang='less'>
    .select-content {
        border-top: 1px solid #ccc;
    }
</style>