<template>
    <div class="app">
        <h2>{{ msg }}</h2>
        <input type="text" v-model="msg">
    </div>
</template>

<script setup lang="ts" name="App">
    import { customRef } from 'vue';
    import useMsgRef from './useMsgRef';

    // 使用 Vue 提供的默认 ref 定义响应式数据，数据一变， 页面就更新
    // let msg = ref('你好')

    // 使用 useMsgRef 来定义一个响应式数据且有延迟效果
    let { msg } = useMsgRef('你好', 2000)
</script>

<style scoped>
    .app {
        background-color: #ddd;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 10px;
    }

    button {
        margin: 0 5px;
    }
</style>