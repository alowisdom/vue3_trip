<script setup>
import { ref } from 'vue';


defineProps({
    titles: {
        type: Array,
        default: () => []
    }
})

const currentIndex = ref(0)

function itemClick(index) {
    this.currentIndex = index
}


</script>

<template>
    <div class="tab-control">
        <template v-for="(item, index) in titles" :key="item">
            <div class="tab-control-item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
                <span>{{ item }}</span>
            </div>
        </template>
    </div>
</template>

<style scoped lang='less'>
.tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
}

.tab-control-item {
    flex: 1;
}

.tab-control-item.active {
    color: var(--secondary-color);
}

.tab-control-item.active span {
    // border-bottom: 1px solid var(--primary-color);
}
</style>