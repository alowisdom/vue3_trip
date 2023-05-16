<script setup>
import Background from '@/components/background/Background.vue';
import Search from '@/components/search/Search.vue';
     
</script>

<template>
    <div class="background_and_search">
        <div class="background">
            <Background></Background>
        </div>
        <div class="bottom">
            <Search></Search>
        </div>
    </div>
</template>

<style scoped lang='less'>
     .background_and_search {
        position: relative;
        height: 350px;
        border-bottom: 1px solid #000;

        .background {
            width: 100%;
        }

        .bottom {
            position: absolute;
            bottom: 0;
            width: 100%;

        }
     }
</style>