<script setup>
import { showToast } from 'vant';
import { ref } from 'vue';

     // 搜索框
const searchValue = ref('')
const onSearch = (val) => showToast(val)
</script>

<template>
        <form action="/">
            <van-search
                v-model="searchValue"
                shape="round"
                placeholder="可输入城市、国家/地区或大洲"
                @search="onSearch"
                class="searchContent"
            />
        </form>
</template>

<style scoped lang='less'>
     
</style>