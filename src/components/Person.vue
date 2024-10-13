<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我 sum + 1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue';

// data
let car = reactive({ brand: 'Mercedes Benz', price: 100 })
let sum = ref(0)

// methods
function changeCar() {
  // car = { brand: 'Alto', price: 1 }
  // reactive 对象直接更改后就不是响应式对象了，需要使用 Object.assign 方式来分配新的对象
  Object.assign(car, { brand: 'Alto', price: 1 })
}
function changeBrand() {
  car.brand = ' BMW '
}
function changePrice() {
  car.price += 10
}
function changeSum() {
  sum.value += 1
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

ul {
  font-size: 20px;
}
</style>