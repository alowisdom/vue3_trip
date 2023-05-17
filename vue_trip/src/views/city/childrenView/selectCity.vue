<script setup>
import { ref } from 'vue';

// 分类选择
const activeIndex = ref(0)
const items = [
    {
        text: '推荐'
    },
    {
        text: '日韩'
    },
    {
        text: '东南亚'
    },
    {
        text: '中国港澳台'
    }
]
</script>

<template>
    <van-tree-select v-model:main-active-index="activeIndex" height="87vh" :items="items">
        <template #content>

            <div v-if="activeIndex === 0">

                <!-- 热门推荐 -->
                <div class="hotposition">
                    <div class="title">热门目的地</div>
                    <div class="cities">
                        <span class="city">大阪</span>
                        <span class="city">曼谷</span>
                        <span class="city">东京</span>
                        <span class="city">京都</span>
                        <span class="city">首尔</span>
                        <span class="city">台北</span>
                        <span class="city">清迈</span>
                        <span class="city">香港</span>
                        <span class="city">普吉岛</span>
                        <span class="city">伦敦</span>
                        <span class="city">吉隆坡</span>
                        <span class="city">巴黎</span>
                    </div>
                </div>

                <!-- 日韩 -->
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

                <!-- 日本 -->
                <div class="hotposition">
                    <div class="title">日本</div>
                    <div class="cities">
                        <span class="city">大阪</span>
                        <span class="city">东京</span>
                        <span class="city">京都</span>
                    </div>
                </div>

                <!-- 韩国 -->
                <div class="hotposition">
                    <div class="title">韩国</div>
                    <div class="cities">
                        <span class="city">首尔</span>
                        <span class="city">济州市</span>
                    </div>
                </div>

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
                    <div class="title">越南</div>
                    <div class="cities">
                        <span class="city">胡志明市</span>
                        <span class="city">河内</span>
                        <span class="city">会安</span>
                        <span class="city">芽庄</span>
                        <span class="city">大咖</span>

                    </div>
                </div>

                <!-- 港澳台 -->
                <div class="hotposition">
                    <div class="title">港澳台热门目的地</div>
                    <div class="cities">
                        <span class="city">台北市</span>
                        <span class="city">花莲</span>
                        <span class="city">香港</span>
                        <span class="city">高雄</span>
                        <span class="city">澳门</span>
                        <span class="city">台中</span>
                        <span class="city">台南市</span>
                        <span class="city">台东市</span>
                        <span class="city">宜兰市</span>
                        <span class="city">南投</span>

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

            <div v-if="activeIndex === 3">

                <!-- 港澳台 -->
                <div class="hotposition">
                    <div class="title">港澳台热门目的地</div>
                    <div class="cities">
                        <span class="city">台北市</span>
                        <span class="city">花莲</span>
                        <span class="city">香港</span>
                        <span class="city">高雄</span>
                        <span class="city">澳门</span>
                        <span class="city">台中</span>
                        <span class="city">台南市</span>
                        <span class="city">台东市</span>
                        <span class="city">宜兰市</span>
                        <span class="city">南投</span>

                    </div>
                </div>

            </div>

        </template>

    </van-tree-select>
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