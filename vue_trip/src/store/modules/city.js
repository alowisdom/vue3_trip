
import { getCityData } from "@/service/modules/city";
import { defineStore } from "pinia";

const useCityStore = defineStore("city",{
    state:() => {
        return {
            // cities 为服务器获取的大量城市
            cities:{},
            // currentCity 为自己选择好的城市
            currentCity:{
                // 默认值----后面可以改为“显示未选择的HTML”
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