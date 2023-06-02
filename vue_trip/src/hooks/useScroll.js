import { onMounted, onUnmounted, ref } from "vue";
// 节流包得引入
import { throttle } from "underscore";

// 当我们没有传入元素的时候，默认监听的是window 的滚动，如果我们通过ref 传入元素了，我们监听的就是元素内部的滚动
// 这样的hooks 才更具备通用性

// 监听窗口的滚动效果
// scrollHeight（文档的总高度） = scrollTop（文档的可滚动高度） + clientHeight(页面高度)

// 1. 当我们离开页面时我们需要移除监听
// 2. 其他页面也需要类似操作时，可以复用

export default function useScroll(elRef) {
  // 没有传入元素时，默认为window
  let el = window;

  // 将数据定义在外面，方便后续可能会获取某一个值
  let isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);

  // 这里进行节流操作
  const scrollListenHandle = throttle(() => {
    // 如果是window 滚动
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight;
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      // 否则是 el 元素的滚动
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
    }

    // console.log(clientHeight,scrollTop,scrollHeight);
    // 当滚动到底部时，再次获取数据

    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("数据加载中...");
      isReachBottom.value = true;
    }
    // 控制时间为100ms
  }, 100);

  // 挂载监听
  onMounted(() => {
    // 如果又传入elRef，我们就使用元素内部的滚动方法
    if (elRef) el = elRef.value;

    // 传入什么，监听的就是什么的滚动
    el.addEventListener("scroll", scrollListenHandle);
  });

  // TODO...(5-20)
  // 保持活跃状态keppalive

  // 节流TODO...

  // 移除监听
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenHandle);
  });

  // 返回出去接受参数
  // 全部返回出去，方便获取
  return { isReachBottom, scrollHeight, scrollTop, clientHeight };
}
