<template>
  <h2 ref="title2">Hello</h2>
  <button @click="showLog">点我输出h2</button><hr>
  <Person />
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue';
  import { ref } from 'vue'
  let title2 = ref()
  function showLog(){
    console.log(title2.value)
  }
</script>