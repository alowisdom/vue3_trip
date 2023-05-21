<script setup>
import { format_mount_day,getDiffDays } from '@/utils/format_date';
import { ref } from 'vue';
import { useSearchParamsStore } from '@/store/modules/main'
import { storeToRefs } from 'pinia';
import { computed } from '@vue/reactivity';


// 导入在mainstore中初始化好的时间(搜索时间)
const searchParamsStore = useSearchParamsStore()
const {startDate,endDate} = storeToRefs(searchParamsStore)


// 因为这里时依赖前面的属性，所以这里使用计算属性
const startDateStr = computed(() => format_mount_day(startDate.value))
const endDateStr = computed(() => format_mount_day(endDate.value))

// 这里在修改过后可以省略了（因为这里时设置默认值的）
// 将需要传递的起止日期 实例化 出来----在onConfirm 中将数据传递
// const searchParamsStore = useSearchParamsStore()

// // 默认是选择一天(没有选择时间时)
// searchParamsStore.startDate = nowDate
// searchParamsStore.endDate = future


// 计算总天数
const countDate = ref(getDiffDays(startDate.value,endDate.value))

// 这里是判断是否显示的，默认不显示日历，这里取值的时候要.value
const showCalendar = ref(false);


// 显示日历-vant
const onConfirm = (values) => {

    const [start, end] = values;
    const selectStartDate = start
    const selectEndDate = end

    searchParamsStore.startDate = selectStartDate
    searchParamsStore.endDate = selectEndDate

    // 修改之后
    // startDate.value = format_mount_day(selectStartDate)
    // endDate.value = format_mount_day(selectEndDate)

    // 这里也需要绑定,计算总天数
    countDate.value = getDiffDays(selectStartDate,selectEndDate)

    // 1. 这里将选择好的日期传递给citystore 进行搜索的时候需要这个数据
    // 2. 这里的数据可以通过 子传父 的方式让父组件获取数据
    // 3. 当 button 按钮也要抽取组件的时候，第一种方式更加友好，第二种方式的话，就要进行 全局的通信 了
    // searchParamsStore.startDate = selectStartDate
    // searchParamsStore.endDate = selectEndDate


    // 这里需要.value
    showCalendar.value = false
};

// dialog 选择人数
const selectCount = ref(false);
const dialogCount = () => {
    selectCount.value = true
}
// 初始化 默认人数为0
const peopleCount = ref(0);

// TODO--这里需要把人数传递给cit


</script>

<template>
    <div class="date">

        <!-- todo -->
        <!-- dialog -->

        <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm" />

        <!-- 点击时，自动修改成true -->
        <div class="time" @click="showCalendar = true">
            <span class="start">{{ startDateStr }}</span>
            <span>-</span>
            <span class="end">{{ endDateStr }}</span>
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