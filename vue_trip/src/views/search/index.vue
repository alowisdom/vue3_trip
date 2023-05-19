<script setup>
import { useRouter } from 'vue-router';
import { format_mount_day } from '@/utils/format_date';
import { useCityStore } from '@/store/modules/city';
import { storeToRefs } from 'pinia';
import router from '@/router';

const route = useRouter()

// 将数据格式化--后面为获取 query 的数据
const {startDate,endDate} = route.currentRoute.value.query

// 在store中获取城市
 const cityStore = useCityStore()
 const {currentCity} = storeToRefs(cityStore)

//  返回按钮
function clickBack() {
    route.back()
}

</script>

<template>
    <div>

        <h2>search page</h2>
        <!-- 未格式化时间 -->
        <h2>开始时间：{{ $route.query.startDate }}</h2>
        <h2>结束时间：{{ $route.query.endDate }}</h2>
        <!-- 已格式化时间 -->
        <h2>开始时间：{{ format_mount_day(startDate) }}</h2>
        <h2>结束时间：{{ format_mount_day(endDate) }}</h2>

        <!-- 人数 -->
        <h2>总人数： TODO... </h2>

        <!-- 城市 -->
        <h2>城市：{{ $route.query.currentCity }}</h2>
        <!--  -->
        <h2>store 获取城市：{{ currentCity.cityName }}</h2>

        <div class="btn-box">
            <button @click="clickBack" class="btn">返回</button>
        </div>
        <h1>TODO......</h1>

    </div>
</template>

<style scoped lang='less'>

    .btn-box  {
        width: 100%;
        margin-block: 10px;
    }

    .btn {
        padding: 10px;
        // width: 100%;
        background-color: #222;
        color: #fff;
        width: 100%;
        text-align: center;
    }

</style>