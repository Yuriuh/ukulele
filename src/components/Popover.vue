<template>
  <div class="popover" ref="popover">
    <div
      class="content-wrapper"
      ref="contentWrapper"
      v-if="visible"
      :class="{[`position-${position}`]: true}"
    >
      <!-- 把子组件的方法传给父组件 -->
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'YPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'right', 'bottom', 'left'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    this.addPopoverListeners()
  },
  beforeDestroy() {
    this.putBackContent()
    this.removePopoverListeners()
  },
  computed: {
    opneEvent () {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent () {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }
    }
  },
  methods: {
    addPopoverListeners () {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    removePopoverListeners () {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseenter', this.close)
      }
    },
    putBackContent () {
      const {contentWrapper, popover} = this.$refs
      if (!contentWrapper) {return}
      popover.appendChild(contentWrapper)
    },
    positionContent () {
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      let position = {
        top: {top: top + window.scrollY, left: left + window.scrollX},
        bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        }
      }
      contentWrapper.style.left = position[this.position].left + 'px'
      contentWrapper.style.top = position[this.position].top + 'px'
    },
    onClickDocument (e) {
      var self = e.target
      var popover = this.$refs.popover
      var contentWrapper = this.$refs.contentWrapper
      if (popover && (popover === self || popover.contains(self))) {
        return
      }
      if (contentWrapper === self || contentWrapper.contains(self)) {
        return
      }
      this.close()
    },
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close () {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before, &::after {
    content: '';
    position: absolute;
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>
