<template>
  <div style="padding-top: 16px;">
    <y-input value="中文"></y-input>
    <y-input value="disabled" disabled></y-input>
    <y-input value="readonly" readonly></y-input>
  </div>
</template>

<script>
import YInput from '../../../src/components/Input'
export default {
  components: {
    YInput
  }
}
</script>
