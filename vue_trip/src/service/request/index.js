
import axios from "axios";
import  {BASE_URL,TIMEOUT} from './config.js'

class Request {
    constructor(baseURL,timeout){
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }


    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                console.log('网络请求错误');
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

