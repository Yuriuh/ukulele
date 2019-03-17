<template>
  <div id="app">
    <y-button icon="settings" icon-position="left">
      按钮1
    </y-button>
    <y-button icon="settings" icon-position="right">
      按钮2
    </y-button>
    <y-button icon="settings">
      按钮3
    </y-button>
    <y-icon name="down"></y-icon>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothi: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 120px;
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
