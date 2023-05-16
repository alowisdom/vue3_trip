
import { defineStore } from "pinia";

const useCityStore = defineStore("city",{
    state:() => {
        return {
            citys:[]
        }
    },
    actions:{

    }
})

export { useCityStore }