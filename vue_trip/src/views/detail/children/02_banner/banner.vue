<script setup>

const props = defineProps({
    swipe_data: {
        type: Array,
        default: () => []
    }
})

const swipeGroup = {}

for (const item of props.swipe_data) {
    let valueArray = swipeGroup[item.enumPictureCategory]
    // 第一次取值为空时
    if (!valueArray) {
        valueArray = []
        swipeGroup[item.enumPictureCategory] = valueArray
    }

    // 不懂
    valueArray.push(item)

}


// 数据的控制
const nameReg = /【(.*?)】/i
const getName = (name) => {
    // return name.replace(":","")
    const result = nameReg.exec(name)
    return result[1]
}

// 获取图片的索引
const getCurrentItemIndex =(item) => {
    const valueArray = swipeGroup[item.enumPictureCategory]
    return valueArray.findIndex(data => data === item) +1
}


</script>

<template>
    <div class="swipe">
        <van-swipe class="swipe_list" :autoplay="3000" indicator-color="white">

            <template v-for="(item, index) in swipe_data" :key="index">
                <van-swipe-item class="swipe_item">
                    <img :src="item.url" alt="" class="img">
                </van-swipe-item>
            </template>

            <template #indicator="{ active, total }">
                <div class="indicator">

                    <template v-for="(value, key, index) in swipeGroup" :key="key">
                        <span class="span" :class="{ active: swipe_data[active]?.enumPictureCategory == key }">
                            {{ getName(value[0].title) }}

                            <span v-if="swipe_data[active]?.enumPictureCategory == key">
                                {{ getCurrentItemIndex(swipe_data[active]) }}/{{ value.length }}
                            </span>
                        </span>
                    </template>

                </div>
            </template>


        </van-swipe>
    </div>
</template>

<style scoped lang='less'>
.swipe {
    .swipe_list {
        .swipe_item {
            .img {
                width: 100%;
            }

        }

        .indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 0px 4px;
            font-size: 12px;
            background-color: #fff;
            display: flex;
            border-radius: 4px;
            margin-bottom: 5px;


            .span {
                margin: 2px 4px;


                &.active {
                    background: var(--fivth-color);
                    padding: 0px 4px;
                    border-radius: 4px;
                    align-items: center;
                    color: #fff;
                }

            }

        }
    }
}
</style>