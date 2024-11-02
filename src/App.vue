<template>
    <div class="app">
        <h2>姓名：{{ person2.name }}</h2>
        <h2>年龄:{{ person2.age }}</h2>
        <button @click="person.age += 1">修改年龄</button>
        <hr>
        <h2>{{ car2 }}</h2>
        <button @click="car2.price += 10">点我价格+10</button>
    </div>
</template>

<script setup lang="ts" name="App">
    import { markRaw, reactive, toRaw } from 'vue';
    import mockjs from 'mockjs'

    let person = reactive({
        name: 'tony',
        age: 18
    })

    /*
    toRaw:
    在需要将响应式对象传递给非 Vue 的库或外部系统时，使用 toRaw 可以确保他们收到的是普通对象
    */
    let person2 = toRaw(person)

    /* 
    markRaw:
    标记一个对象，使其永远不会变成响应式的
    */

    let car = markRaw({ brand: 'Benz', price: 100 })
    car.price += 1
    car.price += 1
    car.price += 1

    let car2 = reactive(car)

    console.log(car);
    console.log(car2);

    let mockJs = markRaw(mockjs)
    console.log(mockJs);

    function showPerson(p: any) {
        p.age += 10
        p.name += '~'
        console.log(p);
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