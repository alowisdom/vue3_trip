
import dayjs from 'dayjs'

const format_mount_day = (date) => {
    return dayjs(date).format('MM月DD日')
}

function getDiffDays(startDate,endDate){
    return dayjs(endDate).diff(startDate,'day')
}

export {
    format_mount_day,
    getDiffDays
}