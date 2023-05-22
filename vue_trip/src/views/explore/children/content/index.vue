<script setup>
import { useHouseListStore } from '@/store/modules/explore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// 获取房子列表
const houseListStore = useHouseListStore()
const { houselist } = storeToRefs(houseListStore)
const router = useRouter()

defineProps({
    houselist: {
        type: Array,
        default: () => { [] }
    }
})


// 路由跳转
const navigateToDatail = (id) => {
    router.push('/detail/' + id)
}

</script>

<template>
    <div class="content">

        <!-- 大的盒子 -->
        <div class="big_content" v-for="item in houselist" :key="item.data.houseId">

            <!-- 这里监听点击的是图片的范围 -->
            <img :src="item.data.image.url" alt="" class="big_img" @click="navigateToDatail(item.data.houseId)">

        <div class="big_box">

            <span class="label">{{ item.data.location }}</span>

            <div class="introduce">
                <span>{{ item.data.summaryText }}</span>
                <span>￥{{ item.data.productPrice }}</span>
            </div>
        </div>

        <!-- 小的盒子 -->

    </div>


        <!-- 这里的效果后面做，后端数据返回的格式要修改 -->
        <!-- <div class="small_content" v-if="item.discoveryContentType === 9">
                <div class="houseItem">
                    <img :src="item.data.image.url" alt="" class="small_img">

                    <div class="small_box">

                            <span class="small_label">近沙塘</span>

                            <div class="small_introduce">
                                <span>泰国 拉维(Rawai).9室21床16人.★4.5</span>
                                <span>￥5031</span>
                            </div>
                        </div>
                    </div>

                </div> -->
    </div>
</template>

<style scoped lang='less'>
.content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .big_content {
        position: relative;
        height: 320px;
        width: 100%;
        padding: 0 15px;
        margin-top: 15px;

        .big_img {
            width: 100%;
            height: 100%;
            border-radius: var(--primary-radius);
        }

        .big_box {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            padding: 0 15px;


            .label {
                padding: 4px 8px;
                margin-left: 10px;
                background-color: var(--fivth-color);
                border-radius: var(--secondary-radius);
                font-size: 12px;
                color: #fff;
            }

            .introduce {
                color: #fff;
                margin: 10px;
                font-size: 12px;

            }

        }


    }
}




// .small_content {

//     margin-top: 15px;
//     width: 45%;
//     padding: 0 15px;
//     display: flex;
//     gap: 15px;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     position: relative;

//     .houseItem {
//         // width: 100%;
//     }

//     .small_img {
//         // width: 100%;
//         width: 250px;
//         height: 240px;
//         border-radius: var(--primary-radius);
//     }

//     .small_box {
//         position: absolute;
//         bottom: 0;
//         width: 100%;

//         .small_label {
//             padding: 4px 8px;
//             margin-left: 5px;
//             background-color: #fff;
//             border-radius: var(--secondary-radius);
//             font-size: 12px;
//         }

//         .small_introduce {
//             width: 100%;
//             color: #fff;
//             font-size: 12px;
//             padding: 10px 5px;
//             display: flex;
//             flex-direction: row;
//             flex-wrap: wrap;
//         }

//     }
// }
</style>