<template>
  <div class="person">
    <ul>
      <li v-for="personObj in list" :key="personObj.id">
        {{ personObj.name }} -- {{ personObj.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { withDefaults } from 'vue'
  import { type Persons } from '@/types'

  // defineProps(['list'])

  // 接收 list + 限制类型
  // defineProps<{list: Persons}>()

  // 接收 list + 限制类型 + 限制必要性 + 指定默认值
  withDefaults(defineProps<{ list?: Persons }>(), {
    list: () => [{ id: 'ausydgyu01', name: '康师傅.王麻子.特仑苏', age: 19 }]
  })
  /* let x = defineProps(['list'])
  console.log(x) */

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