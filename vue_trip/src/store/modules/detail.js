import { defineStore } from "pinia";
import { getDetailData } from "@/service/modules/detail";

const useDetailStore = defineStore('detail',{
    state:() => {
        return {
            detailInfos:{}
        }
    },
    actions:{
        async fetchDetailAction(params){
            const res = await getDetailData(params)
            this.detailInfos = res.data
            
        }
    }
})

export { useDetailStore }