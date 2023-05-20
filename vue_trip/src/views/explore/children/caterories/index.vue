<script setup>
import { useCategoriesStore } from '@/store/modules/explore';
import { storeToRefs } from 'pinia';
import image from '@/assets/data/explore/image'
import { getAssetURL } from '@/utils/load_assets';

const categoriesStore = useCategoriesStore()
const { categories } = storeToRefs(categoriesStore)


// 这里和图片的顺序要对上
// function hhhh(index) {
//     console.log(index);
//     console.log(getAssetURL(image[index].path));
// }

</script>

<template>
    <div class="categories_item">

        <div class="categories-box" v-for="(item,index) in categories" :key="item.id" >

            <img :src="getAssetURL(image[index].path)" alt="" class="img">
 
            <span class="title" @click="hhhh(index)">{{ item.title }}</span>
        </div>

    </div>
</template>

<style scoped lang='less'>
.categories_item {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    padding-bottom: 15px;
    overflow-x: scroll;
    // overflow-x: hidden;
    border-bottom: 1px solid #ccc;

    // 隐藏滚动条
    &::-webkit-scrollbar{
        display: none;
    }

    .categories-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        .img {
            width: 26px;
            height: 26px;
            margin-bottom: 5px;
            margin-inline: 16px;

        }

        .title {
            font-size: 12px;
        }
    }

}
</style>