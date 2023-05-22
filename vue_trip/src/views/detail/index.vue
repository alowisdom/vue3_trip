<script setup>
import { useRoute, useRouter } from 'vue-router';
import turnback from './children/turnback/index.vue'
import banner from './children/banner/banner.vue'
import {useDetailStore} from '../../store/modules/detail'
import { storeToRefs } from 'pinia';

// 获取传递过来的id信息
const route = useRoute()
const router = useRouter()
const houseDetailId = route.params.id

// 获取 store 中的详情数据(传入id)
const detailStore = useDetailStore()
detailStore.fetchDetailAction(houseDetailId)

// 拿到 detail 的数据
const detailInfo = storeToRefs(router)

</script>

<template>
    <div class="top-page">
        <turnback></turnback>

        <banner></banner>
    </div>
</template>

<style scoped lang='less'></style>