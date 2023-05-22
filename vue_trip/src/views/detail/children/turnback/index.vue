<script setup>
const onClickLeft = () => history.back();

</script>

<template>
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft">
        <template #right>
            <img src="@/assets/img/tabbar/favor.png" alt="" class="icon">
        </template>
    </van-nav-bar>
</template>

<style scoped lang='less'>

.icon {
    width: 23px;
    height: 23px;
}

</style>