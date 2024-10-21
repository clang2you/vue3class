<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>玩具:{{ toy }}</h4>
        <h4>父给的车：{{ car }}</h4>
        <button @click="sendToy">把玩具给父亲</button>
    </div>
</template>

<script setup lang="ts" name="Child">
    import { ref } from 'vue';
    // data
    let toy = ref('Ultraman')
    //声明接收props
    defineProps(['car', 'sendToy'])
</script>

<style scoped>
    .child {
        background-color: skyblue;
        padding: 10px;
        box-shadow: 0 0 10px;
        border-radius: 10px;
    }
</style>