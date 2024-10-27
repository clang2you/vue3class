<template>
    <div>
        <h3>父组件</h3>
        <h4>{{ username }}</h4>
        <h4>{{ password }}</h4>
        <!-- v-model 用在html标签上 -->
        <!-- <input type="text" v-model="username"> -->
        <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

        <!-- v-model 用在组件标签上 -->
        <!-- <AtguiguInput v-model="username" /> -->
        <!-- <AtguiguInput :modelValue="username" @update:modelvalue="username = $event" /> -->
        <!-- 修改 modelValue -->
        <!-- value 的名字是可以修改的，同时可以在组件标签上多次使用 v-model -->
        <AtguiguInput v-model:ming="username" v-model:mima="password" />
    </div>
</template>

<!-- 
$event 到底是啥？啥时候能.target
对于原生事件，$event就是事件对象 ===> 能.target
对于自定义事件，$event 就是触发事件时，所传递的数据 ===> 不能.target 
-->


<script setup lang="ts" name="Father">
    import { ref } from 'vue';
    import AtguiguInput from './AtguiguInput.vue';

    // data
    let username = ref('zhangsan')
    let password = ref('123456')
</script>

<style scoped>
    .father {
        padding: 20px;
        background-color: rgb(165, 164, 164);
        border-radius: 10px;
    }
</style>