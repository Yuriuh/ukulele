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
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
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
