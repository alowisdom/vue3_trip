import { defineStore } from "pinia";

const useMainStore = defineStore('mianstore', {
    state:()=> {
        return {
            // 定义公用的数据（token，starttime，endtime....）
            // 加载动画loading
            isloading:true
            
        }
    },

    actions:{

    }
})


// 格式化时间
const nowDate = new Date()
const futureDate = new Date()
futureDate.setDate(nowDate.getDate() +1)

// 搜索参数的store
const useSearchParamsStore = defineStore('searchparams',{
    state:() => {
        return {
            // 起止日期应该在 explore 页面当中
            startDate:nowDate,
            endDate:futureDate

            // TODO
            // 应该传递的数据还有--1. 人数--2.景点 
            // 价格在搜索页面进行筛选

        }
    }
})

export {
    useMainStore,
    useSearchParamsStore
}