<template>
  <div class="wrapper" :class="{error}">
    <!-- 如何让组件支持 v-model ? -->
    <!-- :value + $event.target.value -->
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './Icon'
export default {
  components: {
    Icon
  },
  // 大部分的时候 name 是没用的
  // name 是用来调试的
  name: 'YInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "_var";
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $input-height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled], &[readonly] {
      border-color: #bbb;
      color: #bbb;
      background: transparent;
      cursor: not-allowed;
    }
    &[readonly] {
      cursor: default;
    }
  }
  &.error {
    > input {
      border-color: $red;
      box-shadow: none;
    }
  }
  .icon-error {
    fill: $red;
  }
  .error-message {
    color: $red;
  }
}
</style>
