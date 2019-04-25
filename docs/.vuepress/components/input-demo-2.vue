<template>
  <div style="padding-top: 16px;">
    <y-input v-model="value"></y-input>
    <div> value: {{value}} </div>
  </div>
</template>

<script>
import YInput from '../../../src/components/Input'
export default {
  components: {
    YInput
  },
  data () {
    return {
      value: '1'
    }
  }
}
</script>