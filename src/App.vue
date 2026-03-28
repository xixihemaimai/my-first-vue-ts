<template>
    <div>
        <h1>我是app</h1>
        <el-button :icon="Search">测试</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Search } from '@element-plus/icons-vue';

export default defineComponent({
    methods: { Search },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
