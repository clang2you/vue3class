<template>
  <div class="person">
    <h1>情况二:监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch } from 'vue'
  //data
  let person = ref({
    name: '张三',
    age: 18
  })
  //methods
  function changeName() {
    person.value.name += '~'
  }
  function changeAge() {
    person.value.age += 1
  }
  function changePerson() {
    person.value = { name: '李四', age: 20 }
  }
  /*
  watch 的第一个参数是：被监视的数据
  watch 的第二个参数是：监视的回调
  watch 的第三个参数是：配置对象（deep，immediate....)
  */
  watch(person, (newValue, oldValue)=>{
    console.log('person发生变化', newValue, oldValue)
  }, {deep:true, immediate: true})
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