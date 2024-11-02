<template>
    <div class="app">
        <h2>当前sum1为：{{ sum1 }}</h2>
        <h2>当前sum2为：{{ sum2 }}</h2>
        <h2>当前car1为:{{ car1 }}</h2>
        <h2>当前car2为:{{ car2 }}</h2>
        <button @click="changeSum1">点我 sum1 + 1</button>
        <button @click="changeSum2">点我 sum2 + 1</button>
        <button @click="changeBrand1">修改品牌</button>
        <button @click="changeColor1">修改颜色</button>
        <button @click="changePrice1">修改价格</button>
    </div>
</template>

<script setup lang="ts" name="App">
    import { reactive, readonly, ref, shallowReadonly } from 'vue';

    let sum1 = ref(0)
    let sum2 = readonly(sum1)

    let car1 = reactive({
        brand: 'Benz',
        options: {
            color: 'red',
            price: 100
        }
    })

    let car2 = shallowReadonly(car1)

    function changeSum1() {
        sum1.value += 1
    }
    function changeSum2() {
        sum2.value += 1
    }

    function changeBrand1() {
        car1.brand = 'Audi'
    }

    function changeColor1() {
        car1.options.color = 'Blue'
    }

    function changePrice1() {
        car1.options.price += 10
    }
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