<template>
  <div style="margin-top: 16px;">
    <y-button>默认按钮</y-button>
    <y-button icon="settings">图标按钮</y-button>
    <y-button :loading="true">加载按钮</y-button>
    <y-button disabled>禁用按钮</y-button>
  </div>
</template>

<script>
import YButton from '../../../src/components/Button.vue'
export default {
  components: {
    YButton
  },
  data () {
    return {
      
    }
  }
}
</script>
