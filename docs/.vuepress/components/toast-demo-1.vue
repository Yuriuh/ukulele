<template>
  <div style="padding-top: 16px;">
    <div>
      <y-button @click="$toast('点击弹出提示')">上方弹出</y-button>
      <y-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</y-button>
      <y-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</y-button>
    </div>
  </div>
</template>

<script>
import plugin from '../../../src/components/plugin'
import YButton from '../../../src/components/Button'
import Vue from 'vue'

Vue.use(plugin)

export default {
  components: {
    YButton
  },
}
</script>

<style>
.y-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>