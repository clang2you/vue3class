<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <!-- 可以用在普通 DOM 标签上，获取的是 DOM 节点
    用在组件标签上，获取的是组件实例对象 -->
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">

  import { ref } from 'vue'

  // create data
  let title2 = ref()

  function showLog() {
    console.log(title2.value)
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