
import axios from "axios";
import  {BASE_URL,TIMEOUT} from './config.js'
import { useMainStore } from "@/store/modules/main.js";

const mianStore = useMainStore()

class Request {
    constructor(baseURL,timeout){
        this.instance = axios.create({
            baseURL,
            timeout
        })

        // 请求拦截器
        //  我们可以在拦截器中设置loading动画，而不是request中
        this.instance.interceptors.request.use((config) => {
            // 在这里设置loading
            mianStore.isloading = true
            return config
        },err => {
            return err
        })


        // 响应拦截器
        this.instance.interceptors.response.use((res) => {
            // 取消laoding
            mianStore.isloading = false
            return res
        },err => {
            // 无论响应是否成功
            mianStore.isloading = false
            return err
        })


    }


    request(config) {

        // 在网络请求前显示加载动画
        // mianStore.isloading = true

        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {

                // 网络请求成功时
                // mianStore.isloading = false

                resolve(res.data)
            }).catch(err => {
                console.log('网络请求错误');

                // 网络请求错误的时候，蒙版也是需要消失的
                // mianStore.isloading = false

                reject(err)
            })
        })
    }

    get(config) {
        return this.request({ ...config,method:'get' }) 
    }

    post(config) {
        return this.request({ ...config,method:'post' })
    }

}

const request = new Request(BASE_URL,TIMEOUT)

export default request

