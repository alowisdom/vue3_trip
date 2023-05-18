
import { getCityData } from "@/service/modules/city";
import { defineStore } from "pinia";

const useCityStore = defineStore("city",{
    state:() => {
        return {
            cities:{},
            currentCity:{
                cityName:'广州'
            }
        }
    },
    actions:{
        async fetchCitiesAction(){
            // 发起网络请求
            const res = await getCityData()
            this.cities = res.data

        }
    }
})

export { useCityStore }