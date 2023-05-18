<script setup>
import Background from './children/background/Background.vue';
import Search from './children/search/Search.vue'
     
</script>

<template>
    <div class="explore">
        
        <div class="top">
            <Background class="explore_bg"></Background>
            <Search class="explore_search"></Search>
        </div>

        
    </div>
</template>

<style scoped lang='less'>
     .explore {
        
        .top {
            position: relative;
            height: 350px;

            .explore_search {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
            }

        }

     }
</style>