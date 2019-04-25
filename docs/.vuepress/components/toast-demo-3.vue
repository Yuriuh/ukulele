<template>
  <div style="padding-top: 16px;">
    <div>
      <y-button @click="onClickButton">上方弹出</y-button>
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
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:red;">strong标签加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>

<style>
.gulu-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>