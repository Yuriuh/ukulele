<template>
  <div id="app">

    <y-input value="张三" disabled></y-input>
    <y-input value="张三" readonly></y-input>
    <y-input value="李四"></y-input>
    <y-input value="王五" error="姓名错误"></y-input>

    <div style="margin-top: 20px;">
      <y-button
        :loading="loading1"
        icon-position="left"
        @click="loading1 = !loading1"
      >
        按钮
      </y-button>

      <y-button
        :loading="loading2"
        icon="settings" icon-position="right"
        @click="loading2 = !loading2"
      >
        按钮
      </y-button>

      <y-button
        :loading="loading3"
        icon="settings"
        @click="loading3 = !loading3"
      >
        按钮
      </y-button>

      <y-button-group>
        <y-button icon="back">上一页</y-button>
        <y-button>更多</y-button>
        <y-button icon="right" icon-position="right">下一页</y-button>
      </y-button-group>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "app",
  components: {

  },
  data () {
    return {
      loading1: true,
      loading2: false,
      loading3: true
    }
  }
}
</script>

<style lang="scss">
#app {
  margin-left: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
body {
  font-size: var(--font-size);
}
</style>
