<template>
  <button
    class="y-button"
    :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')"
  >
    <y-icon v-if="icon && !loading" class="icon" :name="icon"></y-icon>
    <y-icon v-if="loading" class="loading icon" name="loading"></y-icon>
    <!-- slot 不能加 class, 所以包一层 div -->
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  // props: ['icon', 'iconPosition']
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      // 检查用户是否误传入莫名其妙的参数值, 如 "up"
      validator (value) {
        // if (value !== 'left' && value !== 'right') {
        //   return false
        // } else {
        //   return true
        // }
        // return !(value !== 'left' && value !== 'right')
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
  .loading {
    animation: spin 1.4s infinite linear;
  }
}
</style>
