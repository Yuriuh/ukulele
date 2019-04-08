<template>
  <div class="y-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YContent'
}
</script>

<style lang="scss" scoped>
.y-content {
  flex-grow: 1;
}
</style>
