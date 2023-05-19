<script setup>
import { useCategoriesStore } from '@/store/modules/explore';
import { storeToRefs } from 'pinia';


    const categoriesStore = useCategoriesStore()  
    
    const {categories} = storeToRefs(categoriesStore)
    
</script>

<template>
    <div>
        <h2>categories cpmponent</h2>
        <template v-for="item in categories">
            <span>{{ item.title }}</span>
        </template>
    </div>
</template>

<style scoped lang='less'>
     
</style>