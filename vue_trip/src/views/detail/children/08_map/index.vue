<script setup>
import detailSection from '@/components/detail/detail-section.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
const mapRef = ref()

const props = defineProps({
    position:{
        type:Object,
        default:() =>({})
    }
})

// 获取经纬度
const longitude = props.position.longitude
const latitude = props.position.latitude

onMounted(() => {
    // 添加地图
    const map = new AMap.Map(mapRef.value, {
        zoom:13,
        content:[longitude,latitude],
    });

    // 添加标点
    const marker = new AMap.Marker({
        position:[longitude, latitude], //位置
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        })
    map.add(marker); //添加到地图

    

})

</script>

<template>
    <div class="detail_map">
        <detailSection title="地图" more-text="查看更多周边信息">
            <div class="gaode" ref="mapRef">

            </div>
        </detailSection>
    </div>
</template>

<style scoped lang='less'>
.gaode {
    height: 250px;
}
</style>