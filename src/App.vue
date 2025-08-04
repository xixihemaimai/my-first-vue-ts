<template>
    <div>
        <h1>我是app</h1>
        <el-button :icon="Search">测试</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Delete, Search } from '@element-plus/icons-vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
