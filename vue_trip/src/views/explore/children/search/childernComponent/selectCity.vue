<script setup>

import { useRouter } from 'vue-router';

// 点击前往城市
const router = useRouter()
const clickCity = () => {
    router.push('/city')
}

// 获取城市--这里不应该在小组加中获取地址的数据
// 这里只负责获取数据进行展示
// const cityStore = useCityStore()
// const {currentCity} = storeToRefs(cityStore)

defineProps({
    currentCity:{
        type:Object,
        default:() => {}
    }
})

</script>

<template>
    <div class="destination">

        <div class="city">
            <span @click="clickCity">{{ currentCity.cityName }}</span>
        </div>
        <div class="position">
            <input type="text" placeholder="景点/地址/关键词">
        </div>

    </div>
</template>

<style scoped lang='less'>


.destination {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 5px 0;
        border-bottom: 1px solid #ccc;
        // margin-bottom: 2px;

        .city {
            width: 90px;
            border-right: 1px solid #ccc;
            font-size: 16px;
            text-align: center;
        }

        .position {
            width: 100%;

            input {
                width: 100%;
                // background-color: pink;
                padding: 8px;
                border: none;
                font-size: 16px;
            }

            input::placeholder {
                font-size: 14px;
            }

        }


    }


</style>