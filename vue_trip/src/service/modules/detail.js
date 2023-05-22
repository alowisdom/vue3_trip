import request from "../request";

export const getDetailData = (houseId) => {
    return request.get({
        url:'/detail/infos',
        params:{
            houseId
        }
    })

    
}
