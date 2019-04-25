<template>
  <div style="padding-top: 16px;">
    <y-popover trigger="hover">
      <y-button>上方弹出</y-button>
      <template slot="content">
        弹出内容
      </template>
    </y-popover>
    <y-popover position="bottom" trigger="hover">
      <y-button>下方弹出</y-button>
      <template slot="content">
        弹出内容
      </template>
    </y-popover>
    <y-popover position="left" trigger="hover">
      <y-button>左边弹出</y-button>
      <template slot="content">
        弹出内容
      </template>
    </y-popover>
    <y-popover position="right" trigger="hover">
      <y-button>右边弹出</y-button>
      <template slot="content">
        弹出内容
      </template>
    </y-popover>
  </div>
</template>

<script>
import YButton from '../../../src/components/Button'
import YPopover from '../../../src/components/Popover'

export default {
  components: {
    YButton,
    YPopover
  },
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>