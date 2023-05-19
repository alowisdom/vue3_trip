
import request from "../request";

export const getHotSuggestsData = () => {
    return request.get({
        url:'/home/hotSuggests'
    })
}

export const getCategoriesData = () => {
    return request.get({
        url:'/home/categories'
    })
}