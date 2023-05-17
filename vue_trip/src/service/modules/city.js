
import request from '../request'

export const getCityData = () => {
    return request.get({
        url:'/city/all'
    })
}

