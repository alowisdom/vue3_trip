<script setup>
import { useHotSuggestsStore,useCategoriesStore } from '@/store/modules/explore';
import Background from './children/background/Background.vue';
import Search from './children/search/Search.vue'
import Categories from './children/caterories/index.vue'


// 这是发起请求，调用store中的fetchXXXAction
// 把数据存储在了store中，子组件已经可以成功获取到了
const hotsuggestStore = useHotSuggestsStore()
hotsuggestStore.fetchHotSuggestsAction()

// 请求categories数据
const categoriesStore = useCategoriesStore()
categoriesStore.fetchCategoriesAction()

// 获取热门城市
// const { hotsuggests } = toRefs(hotsuggestStore)


// 这是获取store中的数据--这是获取传递过来的数据的时候使用的
// const props = defineProps({
//     hotsuggests:{
//         type:Array,
//         default:() => {}
//     }
// })
     

</script>

<template>
    <div class="explore">
        
        <div class="top">
            <Background class="explore_bg"></Background>
            <Search class="explore_search"></Search>
        </div>

        <Categories class="explore_categories"></Categories>



        
    </div>
</template>

<style scoped lang='less'>
     .explore {

        
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
            margin-inline: 15px;
            margin-top: 10px;
        }

     }
</style>