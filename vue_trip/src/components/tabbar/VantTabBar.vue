<script setup>
import { getAssetURL } from '@/utils/load_assets.js'
import tarbarData from '@/assets/data/tarbar'
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute()
const currentIndex = ref(0)

// 监听路由的改变
watch(route,(newRoute) => {
    const index = tarbarData.findIndex(item => item.path === newRoute.path)
    // 没有找到时，隐藏
    if(index === -1) return
    currentIndex.value =index
})

</script>

<template>
    <van-tabbar v-model="currentIndex" active-color="#e10c44" class="van-tabbar" route>
        <template v-for="(item, index) in tarbarData" :key="item.name">
            <van-tabbar-item :to="item.path">
                <span>{{ item.name }}</span>

                <!-- 自定义图标时 -->
                <template #icon>
                    <img v-if="currentIndex !== index" :src="getAssetURL(item.iconPath)" alt="" class="img">

                    <img v-else :src="getAssetURL(item.active_icon)" alt="" class="img">
                </template>

                <!-- 使用默认的样式时 -->
                <!-- <template #icon>
                    <van-tabbar-item icon="home-o"></van-tabbar-item>
                </template> -->

            </van-tabbar-item>
        </template>
    </van-tabbar>
</template>

<style scoped lang='less'>

    // 1. 有自己的插槽的时候可以在自己的作用域中直接修改

    // 2. 没有插槽时
    // 2-1 去掉scoped 但是这会使全局进行修改
    // 2-2 在局部对默认的 属性 进行覆盖
    // 2-3 在局部找到要修改的 类 ，用：deep （.class）{} 进行穿透，再直接修改样式


    .van-tabbar {

        // 利用第三方ui库的时候要这样修改样式

        // 修改样式的方法,只是针对这个页面进行修改
        // 去页面中找到对应的样式，在这里进行修改
        // 方式一  找到对应的属性
        // --van-tabbar-item-icon-size:20px;


        // 方式二  修改对应的类，重写属性
        // 把scoped去掉（不可取）去掉scoped才会生效
        // ：deep(.class) 子组件穿透


        // 使用默认时修改样式
        :deep(.van-tabbar-item__icon) {
            font-size: 22px;
        }   

        // 自定义时修改样式
        img {
            height: 26px;
        }
    }
</style>