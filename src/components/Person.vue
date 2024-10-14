<template>
  <div class="person">
    <h2>需求：当水温达到60℃，或水位达到80cm时，给服务器发个请求</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch, watchEffect } from 'vue'

  // data
  let temp = ref(10)
  let height = ref(0)

  // methods
  function changeTemp() {
    temp.value += 10
  }

  function changeHeight() {
    height.value += 10
  }

  // watch 实现
  // watch([temp, height], (value) => {
  //   let [newTemp, newHeight] = value
  //   if (newTemp >= 60 || newHeight >= 80) {
  //     console.log("给服务器发请求")
  //   }
  // })

  // watch effect
  watchEffect(() => {
    if (temp.value >= 60 || height.value >= 80) {
      console.log("给服务器发请求")
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