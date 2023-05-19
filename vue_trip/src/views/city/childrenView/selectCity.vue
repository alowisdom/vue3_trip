<script setup>
import { ref } from 'vue';
import { computed } from '@vue/reactivity';


import items from '@/assets/data/city/city';
import customCities from '@/assets/data/city/custom';
import { useRouter } from 'vue-router';
import { useCityStore } from '@/store/modules/city';


// 分类选择
const activeIndex = ref(0)

// 获取数据
const cities = defineProps({
    cities: {
        type: Object,
        default: () => { }
    }
})

// 计算
const city = computed(() => {
    return {
        hotCities: cities.cities?.cityGroup,
        overseaHotCities: cities.cities?.cityGroupOverSea
    }
})

// 将数据传递给store，然后在explore中再获取城市的数据
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
    // 点击选择的城市，将数据保存到 store 中
    cityStore.currentCity = city

    // 返回上一级----全局事件总线
    // 方法二
    router.back()
}


</script>

<template>
    <div>

        <van-tree-select v-model:main-active-index="activeIndex" height="88vh" :items="items" class="van-tree">
            <template #content>

                <div v-if="activeIndex === 0">

                    <!-- 遍历 -->
                    <!-- 热门推荐 -->
                    <div class="hotposition">
                        <div class="title">{{ city.hotCities?.title }}</div>
                        <div class="cities">
                            <span class="city" v-for="item in city.hotCities?.hotCities" :key="item"
                                @click="cityClick(item)">
                                {{ item.cityName }}
                            </span>

                        </div>
                    </div>

                    <!-- 海外 -->
                    <div class="hotposition">
                        <div class="title">{{ city.overseaHotCities?.title }}</div>
                        <div class="cities">
                            <span class="city" v-for="item in city.overseaHotCities?.hotCities" :key="item"
                                @click="cityClick(item)">
                                {{ item.cityName }}
                            </span>
                        </div>
                    </div>

                    <!-- 自定义数据遍历 -->
                    <div class="hotposition" v-for="item in customCities" :key="index">
                        <div class="title">{{ item.title }}</div>
                        <div class="cities">
                            <span class="city" v-for="city in item.cities" :key="id" @click="cityClick(city)">
                                {{ city.cityName }}
                            </span>
                        </div>

                    </div>

                </div>

                <div v-if="activeIndex === 1">
                    <div class="hotposition">
                        <div class="title">日韩热门目的地</div>
                        <div class="cities">
                            <span class="city">大阪</span>
                            <span class="city">东京</span>
                            <span class="city">京都</span>
                            <span class="city">首尔</span>
                            <span class="city">济州市</span>
                        </div>

                    </div>

                    <div class="hotposition">
                        <div class="title">日本</div>
                        <div class="cities">
                            <span class="city">大阪</span>
                            <span class="city">东京</span>
                            <span class="city">京都</span>
                        </div>
                    </div>
                    <div class="hotposition">
                        <div class="title">韩国</div>
                        <div class="cities">
                            <span class="city">首尔</span>
                            <span class="city">济州市</span>
                        </div>
                    </div>
                </div>

                <div v-if="activeIndex === 2">

                    <!-- 东南亚 -->
                    <div class="hotposition">
                        <div class="title">东南亚热门目的地</div>
                        <div class="cities">
                            <span class="city">曼谷</span>
                            <span class="city">清迈</span>
                            <span class="city">普吉岛</span>
                            <span class="city">吉隆坡</span>
                            <span class="city">芭提雅</span>
                            <span class="city">亚庇</span>
                            <span class="city">巴厘岛</span>
                            <span class="city">胡志明市</span>
                            <span class="city">新加坡</span>
                            <span class="city">槟城</span>
                            <span class="city">马尼拉</span>

                        </div>
                    </div>

                    <!-- 泰国 -->
                    <div class="hotposition">
                        <div class="title">泰国</div>
                        <div class="cities">
                            <span class="city">曼谷</span>
                            <span class="city">清迈</span>
                            <span class="city">普吉岛</span>
                            <span class="city">芭提雅</span>
                            <span class="city">甲米</span>
                            <span class="city">华欣</span>
                            <span class="city">清莱</span>
                        </div>
                    </div>

                    <!-- 马来西亚 -->
                    <div class="hotposition">
                        <div class="title">马来西亚</div>
                        <div class="cities">

                            <span class="city">吉隆坡</span>
                            <span class="city">亚庇</span>
                            <span class="city">槟城</span>
                            <span class="city">兰卡威</span>
                            <span class="city">马六甲</span>
                            <span class="city">新山</span>
                            <span class="city">梳邦再也</span>

                        </div>
                    </div>

                    <!-- 越南 -->
                    <div class="hotposition">
                        <div class="title">东南亚热门目的地</div>
                        <div class="cities">
                            <span class="city">胡志明市</span>
                            <span class="city">河内</span>
                            <span class="city">会安</span>
                            <span class="city">芽庄</span>
                            <span class="city">大咖</span>

                        </div>
                    </div>

                </div>


            </template>

        </van-tree-select>

    </div>
</template>

<style scoped lang='less'>
.hotposition {
    padding: 10px;
    margin-right: 20px;
    margin-block: 10px;
    // background-color: pink;

    .title {
        font-size: 18px;
        margin-bottom: 12px;
    }

    .cities {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;

        .city {
            padding: 4px 8px;
            border: 1px solid #ccc;
            margin-block: 5px;
            border-radius: var(--secondary-radius);
        }
    }
}
</style>