<template>
  <div class="person">
    <h1>情况三:监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="test">修改 obj.a.b.c</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue'
  //data
  let person = reactive({
    name: '张三',
    age: 18
  })

  let obj = reactive({
    a: {
      b: {
        c: 666
      }
    }
  })
  //methods
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changePerson() {
    Object.assign(person, { name: '李四', age: 90 })
  }
  function test() {
    obj.a.b.c = 888
  }

  /*
  watch，情况三，监视【reactive】定义的【对象类型】数据，默认开启深度监视且无法关闭
  官方文档：如果坚实的是一个 reactive 对象，底层就已经隐式的创建了深层监听
  */
  watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
  })

  watch(obj, (newValue, oldValue) => {
    console.log('obj发生变化了', newValue, oldValue)
  },{deep: true})
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