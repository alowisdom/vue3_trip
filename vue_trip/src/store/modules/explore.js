import { getHotSuggestsData,getCategoriesData } from "@/service/modules/explore";
import { defineStore } from "pinia";

// 获取热门城市数据
const useHotSuggestsStore = defineStore('hotsuggests',{
    state:() => {
        return {
            hotsuggests:[]
        }
    },

    actions:{
        // 向service 报告，发送网络请求
        async fetchHotSuggestsAction(){
            const res = await getHotSuggestsData()
            this.hotsuggests = res.data
        }
    }
})

// 应该新建一个store 用来存放搜索时需要的数据
// 这里只需要存放数据，不需要发起请求
const useSearchParamsStore = defineStore('searchparams',{
    state:() => {
        return {
            // 起止日期应该在 explore 页面当中
            startDate:{},
            endDate:{}

            // TODO
            // 应该传递的数据还有--1. 人数--2.景点 
            // 价格在搜索页面进行筛选

        }
    }
})

// 获取cagetory数据
const useCategoriesStore = defineStore('categories',{

    state:() => {
        return {
            categories:[]
        }
    },

    actions:{
        async fetchCategoriesAction(){
            const res = await getCategoriesData()
            this.categories = res.data
        }
    }


})


export { useHotSuggestsStore, useSearchParamsStore,useCategoriesStore}