<template>
  <div id="app">
    <y-button></y-button>
  </div>
</template>

<script>
import YButton from './components/Button.vue'
export default {
  name: "app",
  components: {
    YButton
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
.y-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
}
.y-button:hover {
  border-color: var(--border-color-hover);
}
.y-button:active {
  background-color: var(--button-active-bg);
}
.y-button {
  outline: none;
}
</style>
