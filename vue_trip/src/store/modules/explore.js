import { getHotSuggestsData,getCategoriesData,getHouseListData } from "@/service/modules/explore";
import { defineStore } from "pinia";

// 获取hotsuggests城市数据
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

// 获取houselist数据
const useHouseListStore = defineStore('houselist',{
    state:() => ({
        houselist:[],
        currentIndex:1
    }),
    actions:{
        async fetchHouseListAction(){
            const res = await getHouseListData(this.currentIndex)
            // 分页请求数据，要追加，而不是替换
            // push 到末尾，要...追加
            // this.houselist = res.data
            // 而且要保证每一次请求的数据都不一样   
            this.houselist.push(...res.data)
            // 在这里管理页码
            this.currentIndex++
        }
    }
})


export { useHotSuggestsStore, 
        useCategoriesStore,
        useHouseListStore
}