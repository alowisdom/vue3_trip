<script setup>
import { useCityStore } from '@/store/modules/city';
import { storeToRefs } from 'pinia';

import selectCity from './childernComponent/selectCity.vue';
import selectDate from './childernComponent/selectDate.vue'
import { useHotSuggestsStore } from '@/store/modules/explore';
import {useSearchParamsStore} from '@/store/modules/main'
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';



const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)
// 这里要先拿到value，才能拿到cityName
// console.log(currentCity.value.cityName);


// 数据校验
defineProps({
    hotsuggests:{
        type:Array,
        default:() => {}
    }
})


// tips
// 暂时不抽出去
// 已经成功获取热门城市数据，但不展示
const useHotSuggestsStoreNo2 = useHotSuggestsStore()
const {hotsuggests} = toRefs(useHotSuggestsStoreNo2)



// 1.传递过 search 的参数可以选择在 store 中获取，
// 2.也可以选择 子传父 获取
// 注意，我这里传递的是原始的数据，不是格式化好的数据
const searchParamsStore  = useSearchParamsStore()
const {startDate,endDate} = storeToRefs(searchParamsStore)

// 传格式化好的数据过去，TODO
// const  sd = format_mount_day(startDate)
// const ed = format_mount_day(endDate)

// 这里使用 query 的方式传递数据--详情页面则使用动态路由
const router = useRouter()
const navigaToSearch = () => {
    router.push({
        path:'/search',
        query :{
            startDate:startDate.value,
            endDate:endDate.value,
            currentCity:currentCity.value.cityName
        }
    })
}


</script>

<template>
    <div class="search">

        <selectCity :currentCity="currentCity"></selectCity>

        <selectDate></selectDate>

        <!-- <div class="tips">
            <span>可以做饭</span>
            <span>整套房源</span>
            <span>自助入住</span>
        </div> -->

        <!-- 暂时不要这个--tips -->
        <div class="tips">
            <span v-for="(item,index) in hotsuggests" :key="index">{{ item.tagText.text }}</span>
        </div>

        <div class="searchBtn">
            <button class="btn" @click="navigaToSearch">
                <span>&</span>
                <span>搜索房源</span>
            </button>
        </div>

    </div>
</template>

<style scoped lang='less'>
.search {
    border: 1px solid #ccc;
    margin: 5px 15px;
    padding: 0 15px;
    background-color: #fff;
    border-radius: var(--primary-radius);
    font-size: 14px;




    .tips {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-block: 10px;
        font-size: 12px;

        span {
            border: 1px solid #ccc;
            padding: 4px 6px;
            border-radius: var(--secondary-radius);
        }
    }

    .searchBtn {
        margin-top: 10px;
        margin-bottom: 15px;

        .btn {
            width: 100%;
            border: none;
            padding-block: 10px;
            border-radius: var(--secondary-radius);
            background-color: var(--secondary-color);
            color: #fff;
            font-size: 14px;
        }
    }

}
</style>