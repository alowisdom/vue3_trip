<script setup>
import  {getAssetURL}  from '@/utils/load_assets.js'
import tarbarData from '@/assets/data/tarbar'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const currentIndex = ref(0)

const currentHandle = (index,item) => {
    // 这里需要.value
    // 这里时改变currentIndex
    currentIndex.value = index

    // 这里时路由跳转
    router.push(item.path)


}
 

</script>

<template>
    <div class="tab-bar-list">

        <template v-for="(item,index) in tarbarData" :key="item.name">
            <div 
                class="tab-bar-item" 
                :class="{active:currentIndex === index}"
                @click="currentHandle(index,item)"
            >
                <!-- webpack 环境下可以使用 require 包裹 -->
                <!-- 动态加载路径地址 -->

                <img v-if="currentIndex !== index" :src="getAssetURL(item.iconPath)" alt="" class="img">

                <img v-else :src="getAssetURL(item.active_icon)" alt="" class="img">
                
                <span class="text">{{ item.name }}</span>
            </div>
        </template>

    </div>
</template>

<style scoped lang='less'>
.tab-bar-list {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55px;
    display: flex;
    padding-inline: 10px;
    gap: 5px;
    border-top: 1px solid #CCC;
    color: var(--primary-color);

    .tab-bar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        &.active {
            color: var(--secondary-color);
        }

        .img {
            width: 34px;
            height: 34px;
            padding: 5px;
        }

        .text {
            font-size: 10px;
        }
    }
}
</style>