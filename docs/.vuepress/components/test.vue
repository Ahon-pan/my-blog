<template>
  <div style="width: 400px; height: 400px; background: #000">
    <svgAnimate1 :text="text" :des="des" v-if="flag" />
  </div>

  <button @click="handleClick">change</button>
</template>

<script setup>
import svgAnimate1 from './svgAnimate1.vue'
import { ref, nextTick } from 'vue'
const text = ref('这是标题')
const flag = ref(true)
const des = ref('这是描述')
function handleClick() {
  flag.value = false
  text.value = '改变后的标题'
  des.value = '改变后的描述'
  nextTick(() => {
    flag.value = true
  })
}
</script>
