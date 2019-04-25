<template>
  <div style="padding-top: 16px;">
    <y-tabs :selected="selected">
      <y-tabs-head>
        <y-tabs-item name="1">1</y-tabs-item>
        <y-tabs-item name="2">2</y-tabs-item>
      </y-tabs-head>
      <y-tabs-body>
        <y-tabs-pane name="1">content 1</y-tabs-pane>
        <y-tabs-pane name="2">content 2</y-tabs-pane>
      </y-tabs-body>
    </y-tabs>
  </div>
</template>

<script>
import YTabs from '../../../src/components/tabs/tabs'
import YTabsBody from '../../../src/components/tabs/tabs-body'
import YTabsHead from '../../../src/components/tabs/tabs-head'
import YTabsItem from '../../../src/components/tabs/tabs-item'
import YTabsPane from '../../../src/components/tabs/tabs-pane'
export default {
  components: {
    YTabs,
    YTabsBody,
    YTabsHead,
    YTabsItem,
    YTabsPane
  },
  data () {
    return {
      selected: '1'
    }
  }
}
</script>
