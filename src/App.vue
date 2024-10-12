<template>
    <!-- <div class="app">
        <h1>你好啊！</h1>
    </div> -->
    <Person/>
</template>

<script lang="ts">
  import Person from './components/Person.vue';

  export default {
    name: 'App', // component name
    components: {Person} // register component
  }
</script>

<!-- <style>
  .app{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style> -->