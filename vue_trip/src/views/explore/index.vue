<script setup>
import { useHotSuggestsStore, useCategoriesStore, useHouseListStore } from '@/store/modules/explore';
import Background from './children/background/Background.vue';
import Search from './children/search/Search.vue'
import Categories from './children/caterories/index.vue'
import Content from './children/content/index.vue'
import Searchbar from '@/components/searchbar/searchbar.vue';

// 封装hooks
import useScroll from '@/hooks/useScroll'
import { watch } from 'vue';
import { computed } from '@vue/reactivity';



// 这是获取store中的数据--这是获取传递过来的数据的时候使用的
// const props = defineProps({
//     hotsuggests:{
//         type:Array,
//         default:() => {}
//     }
// })

// 这是发起请求，调用store中的fetchXXXAction
// 把数据存储在了store中，子组件已经可以成功获取到了


// 获取热门城市
const hotsuggestStore = useHotSuggestsStore()
hotsuggestStore.fetchHotSuggestsAction()

// 请求categories数据
const categoriesStore = useCategoriesStore()
categoriesStore.fetchCategoriesAction()

// 获取houselist数据
const houseListStore = useHouseListStore()
houseListStore.fetchHouseListAction()


// 定义初始页码
// let currentIndex = 1
// function showmore(){
//     // 也可以选择在store中管理currentindex
//     // currentIndex++
//     houseListStore.fetchHouseListAction()
// }

// 监听页面滑动到底部自动刷新
// 抽取hooks

// 解构出isReachBottom
// scrollTop 需要做节流操作
const { isReachBottom, scrollTop } = useScroll()

// 使用watch监听 值 得变化--不用computed是因为这里有逻辑需要执行
watch(isReachBottom, (newValue) => {
    if (newValue) {
        // 这里返回得就是promise
        houseListStore.fetchHouseListAction().then(() => {
            // 拿到数据之后，改变之后要将值转变为false
            isReachBottom.value = false

        })

    }
})

// const isShowSearchBar = ref(false)
// // 搜索框下拉后得显示控制
// // 监听距离顶部得距离
// watch(scrollTop,(newValue) => {
//     // 节流优化
//     // TODO...
//     isShowSearchBar.value = newValue > 80
// })

// 两者的区别是，watch可以写对应的逻辑，而conputed 只是简单监听值得变化

// 也可以使用计算属性
// 计算属性有缓存
// 一个属性依赖另外一个响应式属性
const isShowSearchBar = computed(() => {
    return scrollTop.value >= 250
})



</script>

<template>
    <div class="explore">

        <div class="explore_searchbar" v-if="isShowSearchBar">
            <Searchbar></Searchbar>
        </div>

        <div class="top">
            <Background class="explore_bg"></Background>
            <Search class="explore_search"></Search>
        </div>



        <Categories class="explore_categories"></Categories>

        <Content class="explore_content"></Content>

        <div class="showmore">请稍后...</div>


    </div>
</template>

<style scoped lang='less'>
.explore {


    margin-bottom: 100px;

    .explore_searchbar {

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 16px 16px 10px 16px;
        background-color: #fff;
        z-index: 10;
        border-bottom: 1px solid #ddd;

    }

    .top {
        position: relative;
        height: 350px;

        .explore_search {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }

    }

    .explore_categories {
        margin-inline: 5px;
        margin-top: 10px;
    }

    .explore_content {
        margin-top: 15px;
    }

    .showmore {
        margin: 25px auto;
        text-align: center;
        color: var(--primary-color);
    }

}
</style>