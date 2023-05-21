<script setup>
// 这里获取mainstore中的数据

import { useCityStore } from '@/store/modules/city';
import { useSearchParamsStore } from '@/store/modules/main';
import { format_mount_day } from '@/utils/format_date';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';


// 在main（searchParamsStore）中获取起止时间
const searchParamsStore = useSearchParamsStore()
const { startDate, endDate } = storeToRefs(searchParamsStore)

const startDateStr = computed(() => format_mount_day(startDate.value, 'MM/DD'))
const endDateStr = computed(() => format_mount_day(endDate.value, 'MM/DD'))

// 在cityStore中获取城市名字
const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)
// 获得城市名字
const currentCityName = currentCity.value.cityName

</script>

<template>
    <div class="searchbar">

        <div class="city">
            {{ currentCityName }}
        </div>
        <div class="time">
            <span>{{ startDateStr }}</span>-<span>{{ endDateStr }}</span>
        </div>
        <div class="position">
            景点/地址/房源名
        </div>
        <div class="icon">
            <img src="@/assets/img/tabbar/explore.png" alt="" class="icon_search">
        </div>
    </div>
</template>

<style scoped lang='less'>
.searchbar {
    padding: 8px;
    background-color: #ddd;
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--secondary-radius);
    font-size: 14px;

}


.city {
    padding: 0 5px;
    border-right: 1px solid #bbb;
}

.time {
    padding: 0 5px;
    border-right: 1px solid #bbb;
}

.position {
    padding: 0 6px;
    flex: 1;
    overflow: hidden;
    color: var(--primary-color);
    font-size: 12px;
}

.icon {
    padding: 0 5px;

    .icon_search {
        width: 22px;
        height: 22px;
    }
}</style>