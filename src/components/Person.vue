<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">求和自增1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch } from 'vue'

  // data
  let sum = ref(0)

  // methods
  function changeSum(){
    sum.value += 1
  }

  // watch
  // 情况一：监视【ref】定义的【基本类型】数据
  // watch 的返回值是一个停止 watch 的函数，所以以下 stopWatch() 被执行后 watch 就停止了
  const stopWatch = watch(sum, (newValue, oldValue)=> {
    console.log('sum 变化了', newValue, oldValue)
    if ( newValue >= 10){
      stopWatch()
    }
  })
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