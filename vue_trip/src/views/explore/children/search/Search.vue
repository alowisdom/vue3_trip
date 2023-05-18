<script setup>
import { useCityStore } from '@/store/modules/city';
import { storeToRefs } from 'pinia';

import selectCity from './childernComponent/selectCity.vue';
import selectDate from './childernComponent/selectDate.vue'

const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)


</script>

<template>
    <div class="search">

        <selectCity :currentCity="currentCity"></selectCity>

        <selectDate></selectDate>

        <div class="tips">
            <span>可以做饭</span>
            <span>整套房源</span>
            <span>自助入住</span>
        </div>

        <div class="searchBtn">
            <button class="btn">
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