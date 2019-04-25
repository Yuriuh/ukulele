<template>
  <div style="padding-top: 16px;">
    <y-layout style="color: white;">
      <y-header style="height: 50px; background:lightskyblue;">
        header
      </y-header>
      <y-content style="height: 100px; background:deepskyblue;">
        content
      </y-content>
      <y-footer style="height: 50px; background:lightskyblue;">
        footer
      </y-footer>
    </y-layout>
  </div>
</template>

<script>
import YLayout from '../../../src/components/layout/Layout'
import YHeader from '../../../src/components/layout/Header'
import YFooter from '../../../src/components/layout/Footer'
import YContent from '../../../src/components/layout/Content'
import YSider from '../../../src/components/layout/Sider'

export default {
  components: {
    YLayout,
    YHeader,
    YFooter,
    YContent,
    YSider
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
