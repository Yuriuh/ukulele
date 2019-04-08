<template>
  <div class="y-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YButtonGroup',
  mounted () {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`y-button-group 的子元素应该全是 y-button，但是你写的是 ${node.nodeName}`)
      }
    }
  }
}
</script>

<style lang="scss">
.y-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .y-button {
    border-radius: 0;
    &:not(:first-child) {
      // 为啥我要 -2px 可以不重叠
      margin-left: -2px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
