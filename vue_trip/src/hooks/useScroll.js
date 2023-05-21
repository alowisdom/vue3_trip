import { onMounted, onUnmounted, ref } from "vue"
// 节流包得引入
import { throttle } from "underscore"

// 监听窗口的滚动效果
// scrollHeight（文档的总高度） = scrollTop（文档的可滚动高度） + clientHeight(页面高度)

// 1. 当我们离开页面时我们需要移除监听
// 2. 其他页面也需要类似操作时，可以复用


export default function useScroll() {

    // 将数据定义在外面，方便后续可能会获取某一个值
    let isReachBottom = ref(false)
    const clientHeight = ref(0)
    const scrollHeight = ref(0)
    const scrollTop = ref(0)

    // 这里进行节流操作
    const scrollListenHandle = throttle(() => {

        clientHeight.value = document.documentElement.clientHeight
        scrollTop.value = document.documentElement.scrollTop
        scrollHeight.value = document.documentElement.scrollHeight

        // console.log(clientHeight,scrollTop,scrollHeight);
        // 当滚动到底部时，再次获取数据

        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            console.log('数据加载中...');
            isReachBottom.value = true
        }
        // 控制时间为100ms
    },100)

    // 挂载监听
    onMounted(() => {
        window.addEventListener('scroll', scrollListenHandle)
    })

    // TODO...(5-20)
    // 保持活跃状态keppalive

    // 节流TODO...


    // 移除监听
    onUnmounted(() => {
        window.removeEventListener('scroll', scrollListenHandle)
    })

    // 返回出去接受参数
    // 全部返回出去，方便获取
    return {isReachBottom,scrollHeight,scrollTop,clientHeight}

}


