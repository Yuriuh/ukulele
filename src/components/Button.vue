<template>
  <button class="y-button" :class="{[`icon-${iconPosition}`]: true}">
  <!-- <button class="y-button" :class="{'undefined': true}"> -->
  <!-- <button class="y-button" :class="{'left': true}"> -->
  <!-- <button class="y-button" :class="{'right': true}"> -->
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <!-- slot 不能加 class, 所以包一层 div -->
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ['icon', 'iconPosition']
}
</script>

<style lang="scss" scoped>
.y-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // 解决 inline 元素垂直位置不对齐的问题
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: .1em;
  }
  // 让图标在右
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
}
</style>
