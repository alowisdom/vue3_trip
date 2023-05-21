
import dayjs from 'dayjs'

const format_mount_day = (date,formarStr = 'MM月DD日') => {
    // 第一个参数为日期，第二个参数为格式
    return dayjs(date).format(formarStr)
}

function getDiffDays(startDate,endDate){
    return dayjs(endDate).diff(startDate,'day')
}

export {
    format_mount_day,
    getDiffDays
}