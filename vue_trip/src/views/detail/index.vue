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
import { watch } from 'vue';



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
const tabRef = ref()
// 获取滚动的位置       这里时组件内部的滚动，不是window 的滚动
const { scrollTop } = useScroll(tabRef)
// tab_control 逻辑
const isShowTabControl = computed(() => {
    return scrollTop.value > 200
})



// 动态设置name 属性
// 根据函数获取每一个组件的ref,并把它放到数组中
const sectionEls = ref({})
// 这里的name 应该动态显示
const title = computed(() => {
    return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
    // sectionEls.push(value.$el)
    // 获取每个组件的name 中的值
    // 当点击的不是tabContorl 的组件时，没有$el 要取反
    if (!value) return
    const name = value.$el.getAttribute("name")
    sectionEls.value[name] = value.$el
}



// tabcontrol跳转问题
const tabControlClick = (index) => {
    // 第一个组件我们默认不显示
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    // 拿到距离顶部的距离
    let instance = el.offsetTop
    if (index !== 0) {
        instance = instance - 44
    }

    // 滚动到的位置
    tabRef.value.scrollTo({
        top: instance,
        behavior: "smooth"
    })

}

// scrollTo 滚动到
// offsetTop 获取到顶部的距离
// $el 获取每一个组件的跟组件
// 动态绑定ref 的函数，获取每一个组件各自的ref




// 页面滚动匹配
// 步骤：1、监听页面的滚动
// 获取ref
const tabControlRef = ref()
watch(scrollTop, (newValue) => {
    // 拿到每一个tab标签对应的scrollTop 的值
    const els = Object.values(sectionEls.value)
    // 拿到offsetTop 距离顶部的值
    const values = els.map(el => el.offsetTop)

    // 根据newValue 匹配这个高度对应的索引
    // 限制最后一个组件的下标
    let index = values.length - 1
    for (let i = 1; i < values.length; i++) {
        if (values[i] > newValue + 44) {
            index = i -1
            break
        }
    }
    // tcRef.value?.data = index
    tabControlRef.value?.setCurrentIndex(index)
})



</script>

<template>
    <!-- ref 绑定的是这里的最大的页面，因为是在页面内进行滚动的 -->
    <div class="top-page" ref="tabRef">

        <turnback></turnback>

        <!-- 这里子传父的index 没有传过去，导致获取不到index -->
        <!-- 花费一个半小时 -->
        <tabControl :titles="title" class="tabControl" v-if="isShowTabControl" 
        @tabItemClick="tabControlClick" ref="tabControlRef">
        </tabControl>

        <div v-if="mainPart" v-memo="[mainPart]">
            <banner :swipe_data="mainPart.topModule.housePicture.housePics"></banner>
        </div>

        <!-- :ref="getSectionRef" 用来获取组件的ref -->
        <infos name="描述" :topInfos="mainPart?.topModule" :ref="getSectionRef"></infos>

        <facility name="设施" :houseFacility="mainPart?.dynamicModule.facilityModule.houseFacility" :ref="getSectionRef">
        </facility>

        <landlord name="房东" :landlord="mainPart?.dynamicModule.landlordModule" :ref="getSectionRef"></landlord>

        <comment name="评论" :comment="mainPart?.dynamicModule.commentModule" :ref="getSectionRef"></comment>

        <notice name="须知" :orderRules="mainPart?.dynamicModule.rulesModule.orderRules" :ref="getSectionRef"></notice>

        <detailmap name="地图" :position="mainPart?.dynamicModule.positionModule" :ref="getSectionRef" />

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