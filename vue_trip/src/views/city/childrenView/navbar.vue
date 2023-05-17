<script setup>

     // 顶部选择目的地
const onClickLeft = () => {history.back()}

</script>

<template>
        <van-nav-bar
            title="选择目的地"
            left-arrow
            fixed:true
            placeholder:true
            @click-left="onClickLeft"
        />
</template>

<style scoped lang='less'>
     
</style>