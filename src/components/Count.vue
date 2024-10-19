<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import { reactive, ref } from 'vue';
    import { useCountStore } from '@/store/count'

    // data
    let n = ref(1) // 用户选择的数字

    const countStore = useCountStore()
    // 以下两种方式都可以拿到 state 中的数据
    // console.log(countStore.sum);
    // console.log(countStore.$state.sum);

    /* let obj = reactive({
        a: 1,
        b: 2,
        c: ref(3)
    })
    console.log(obj.a);
    console.log(obj.b);
    console.log(obj.c); */

    function add() {
        // 第一种修改方式
        // countStore.sum += n.value

        // 第二种修改方式
        // countStore.$patch({
        //     sum: 888
        // })

        // 第三种修改方式
        countStore.increment(n.value)
    }

    function minus() {
        countStore.sum -= n.value
    }

</script>

<style scoped>
    .count {
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }

    select,
    button {
        margin: 0 5px;
        height: 25px;
    }
</style>