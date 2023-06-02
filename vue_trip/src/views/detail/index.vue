<script setup>
import { useDetailStore } from '../../store/modules/detail'
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
import useScroll from '@/hooks/useScroll';

import turnback from './children/01_turnback/index.vue'
import banner from './children/02_banner/banner.vue'
import infos from './children/03_infos/index.vue'
import facility from './children/04_facility/index.vue'
import landlord from './children/05_landlord/index.vue'
import comment from './children/06_comment/index.vue'
import notice from './children/07_notice/index.vue'
import detailmap from './children/08_map/index.vue'
import intro from './children/09_intro/index.vue'
import tabControl from './children/10_tabControl/index.vue'



// 获取传递过来的id信息
const route = useRoute()
const houseDetailId = route.params.id
// 获取 store ,根据id 发送请求
const detailStore = useDetailStore()
detailStore.fetchDetailAction(houseDetailId)
// 从store 中拿到 detail 的数据
const { detailInfos } = toRefs(detailStore)
// 选出主要的数据（简化传给子组件时的参数）
const mainPart = computed(() => detailInfos.value.mainPart)


// 也要获取组件元素的ref
const tabControlRef = ref()
// 获取滚动的位置       这里时组件内部的滚动，不是window 的滚动
const { scrollTop } = useScroll(tabControlRef)

// tab_control 逻辑
const isShowTabControl = computed(() => {
    return scrollTop.value > 300
})

// 根据函数获取每一个组件的ref,并把它放到数组中
const sectionEls = []
const getSectionRef = (value) => {
    sectionEls.push(value.$el)
    console.log(value.$el);
}
console.log(sectionEls)

const tabControlClick = (index) => {
    console.log("first")
    // 第一个组件我们默认不显示
    let instance = sectionEls[index].offsetTop
    console.log(instance);
    if (index !== 0) {
        instance = instance - 44
    }

    // 滚动到的位置
    tabControlRef.value.scrollTo({
        top: instance,
        behavior: "smooth"
    })

}
// scrollTo 滚动到
// offsetTop 获取到顶部的距离

// $el 获取每一个组件的跟组件
// 动态绑定ref 的函数，获取每一个组件各自的ref



</script>

<template>
    <!-- ref 绑定的是这里的最大的页面，因为是在页面内进行滚动的 -->
    <div class="top-page" ref="tabControlRef">

        <turnback></turnback>

        <tabControl :titles="['描述', '设施', '房东', '评论', '须知', '地图']" class="tabControl" v-if="isShowTabControl"
            @click="tabControlClick">
        </tabControl>

        <div v-if="mainPart">
            <banner :swipe_data="mainPart.topModule.housePicture.housePics"></banner>
        </div>

        <!-- :ref="getSectionRef" 用来获取组件的ref -->
        <infos :topInfos="mainPart?.topModule" :ref="getSectionRef"></infos>

        <facility :houseFacility="mainPart?.dynamicModule.facilityModule.houseFacility" :ref="getSectionRef"></facility>

        <landlord :landlord="mainPart?.dynamicModule.landlordModule" :ref="getSectionRef"></landlord>

        <comment :comment="mainPart?.dynamicModule.commentModule" :ref="getSectionRef"></comment>

        <notice :orderRules="mainPart?.dynamicModule.rulesModule.orderRules" :ref="getSectionRef"></notice>

        <!-- <detailmap :position="mainPart?.dynamicModule.positionModule" :ref="getSectionRef" /> -->

        <intro :priceIntro="mainPart?.introductionModule" />

        <div class="footer">
            <img src="@/assets/img/logo/logo.png" alt="">
            <!-- <div class="text">想住的都在爱彼迎</div> -->
        </div>


    </div>
</template>

<style scoped lang='less'>
.tabControl {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
        width: 123px;
    }

    .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
    }
}
</style>