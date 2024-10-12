<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Person',
    setup(){
        // vue3 中弱化 this，setup 函数中 this 是 undefined

        // data，此时的数据都是非响应式的数据
        let name = '张三'
        let age = 18
        let tel = '1388888888'

        // methods
        function changeName(){
            // console.log(1)
            name = 'Lex Chen'
        }
        function changeAge(){
            // console.log(2)
            age += 1
        }
        function showTel(){
            alert(tel)
        }

        // 将数据、方法交出去，模版中才可以使用
        return {name, age, changeName, changeAge, showTel}
        // setup 的返回值也可以是一个渲染函数
        // return ()=> '哈哈'
    }
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button {
    margin: 0 5px;
}
</style>