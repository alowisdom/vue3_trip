<script setup>
import { useMainStore } from '@/store/modules/main';


const isLoadingStore = useMainStore()
const removeLoading = () => {
    isLoadingStore.isloading = false
}
</script>

<template>
    <div class="loading" v-show="isLoadingStore.isloading" @click="removeLoading">
        <div class="loading-box">
            <img src="@/assets/img/loading/loading.gif" alt="" class="img">
        </div>
    </div>
</template>

<style scoped lang='less'>
.loading {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
    z-index: 15;

    .loading-box {
        width: 120px;
        height: 120px;
        background-color: #fff;
        border-radius: var(--primary-radius);

        .img {
            width: 120px;
            height: 120px;
            border-radius: var(--primary-radius);
        }
    }
}
</style>