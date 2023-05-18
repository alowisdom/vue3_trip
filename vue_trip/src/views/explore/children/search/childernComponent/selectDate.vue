<script setup>
import { format_mount_day,getDiffDays } from '@/utils/format_date';
import { ref } from 'vue';

// 格式化时间
const nowDate = new Date()
const future = new Date()
future.setDate(nowDate.getDate() +1)

const startDate = ref(format_mount_day(nowDate))
const endDate = ref(format_mount_day(future))

// 计算总天数
const countDate = ref(getDiffDays(nowDate,future))

// 这里是判断是否显示的，默认不显示日历，这里取值的时候要.value
const showCalendar = ref(false);

// 显示日历-vant
const onConfirm = (values) => {

    const [start, end] = values;
    const selectStartDate = start
    const selectEndDate = end

    startDate.value = format_mount_day(selectStartDate)
    endDate.value = format_mount_day(selectEndDate)

    // 这里也需要绑定,计算总天数
    countDate.value = getDiffDays(selectStartDate,selectEndDate)

    // 这里需要.value
    showCalendar.value = false
};

// dialog 选择人数
const selectCount = ref(false);
const dialogCount = () => {
    selectCount.value = true
}

const peopleCount = ref(0);


</script>

<template>
    <div class="date">

        <!-- todo -->
        <!-- dialog -->

        <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm" />

        <!-- 点击时，自动修改成true -->
        <div class="time" @click="showCalendar = true">
            <span class="start">{{ startDate }}</span>
            <span>-</span>
            <span class="end">{{ endDate }}</span>
            <span class="total">共{{countDate}}天</span>
        </div>
        <span>|</span>
        <div class="count">
            <span @click="dialogCount">人数</span>
        </div>

        <van-dialog 
            v-model:show="selectCount" 
            title="选择人数"
            width="80%"
            confirmButtonText="保存"
            confirmButtonColor="#22222"
            closeOnClickOverlay="true"
        >
            <div class="dialog_count">
                <div>成人</div>
                <van-stepper v-model="peopleCount" theme="round" button-size="28" disable-input />
            </div>
            <div class="dialog_count">
                <div>儿童</div>
                <van-stepper v-model="peopleCount" theme="round" button-size="28" disable-input />
            </div>
            <div class="dialog_count">
                <div>婴儿</div>
                <van-stepper v-model="peopleCount" theme="round" button-size="28" disable-input />
            </div>

        </van-dialog>
    </div>
</template>

<style scoped lang='less'>
.date {
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-block: 5px;
    height: 35px;
    line-height: 35px;

    .time {
        width: 100%;

        .start {
            margin-right: 4px;
        }

        .end {
            margin-left: 4px;
        }

        .total {
            color: #ccc;
            font-size: 12px;
            margin-left: 8px;
        }
    }

    .count {
        width: 90px;
        text-align: center;

    }

    .dialog_count {
        display: flex;
        justify-content: space-around;
        gap: 10px;
        margin-bottom: 10px;

        .van-button{
            background: #222;
        }
    }
}
</style>