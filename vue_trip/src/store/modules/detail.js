import { defineStore } from "pinia";
import { getDetailData } from "@/service/modules/detail";

const useDetailStore = defineStore('detail',{
    state:() => {
        return {
            detail:{}
        }
    },
    actions:{
        async fetchDetailAction(params){
            const res = await getDetailData(params)
            this.detail = res.data
        }
    }
})

export { useDetailStore }