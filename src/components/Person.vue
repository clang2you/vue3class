<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{ fullName }}</span>
    <button @click="changeFullname">李-四</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from 'vue';

let firstName = ref('张')
let lastName = ref('三')

// 以下定义的 fullname 是一个计算属性，且是只读的不可修改
// let fullName = computed(() => {
//   return firstName.value + '-' + lastName.value
// })

// 以下定义的 fullname 是一个计算属性且可读可写
let fullName = computed({
  get(){
    return firstName.value + '-' + lastName.value
  },
  set(val){
    const [str1, str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
    console.log('set', val)
  }
})

function changeFullname(){
  fullName.value = '李-四'
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