<template>
  <div class="person">
    <h1>情况四，监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <h2>汽车: {{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue';

  // data
  let person = reactive(
    {
      name: '张三',
      age: 18,
      car: {
        c1: '奔驰',
        c2: '宝马'
      }
    }
  )

  // methods
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changeC1() {
    person.car.c1 = '奥迪'
  }
  function changeC2() {
    person.car.c2 = '大众'
  }
  function changeCar() {
    person.car = { c1: '雅迪', c2: '爱玛' }
  }

  /*
  监视 ref 或 ractive 定义的【对象类型】的数据中的某个属性：
  1.若该属性是【基本类型】不是【对象属性】，需要写成函数形式
  */
  watch(() => person.name, (newValue, oldValue) => {
    console.log('person.name 发生变化了', newValue, oldValue)
  })

  /* 
  2.若该属性是依然是【对象类型】，可直接编，也可写成函数，最好写成函数，如果要监控具体的属性变化，加上 deep:true
  结论：监视的要是对象里的属性，最好写函数式，若是对象监视的是地址值，需要关注对象内部需要手动开启深度监视
  */
  watch(() => person.car, (newValue, oldValue) => {
    console.log('person.car 发生变化了', newValue, oldValue)
  }, { deep: true })
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