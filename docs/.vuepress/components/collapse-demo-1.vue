<template>
  <div style="padding-top: 16px; padding-bottom: 55px;">
    <y-collapse :selected.sync="selectedTab">
      <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
      <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
      <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
    </y-collapse>
  </div>
</template>

<script>
import YCollapse from '../../../src/components/collapse/Collapse'
import YCollapseItem from '../../../src/components/collapse/Collapse-Item'
export default {
  components: {
    YCollapse,
    YCollapseItem
  },
  data () {
    return {
      selectedTab: ['1', '2']
    }
  }
}
</script>
