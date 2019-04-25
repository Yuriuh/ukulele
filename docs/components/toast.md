---
title: Toast
sidebarDepth: 0
---

# Toast

## 默认功能

### 预览

<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

### 代码

```html
<div>
  <y-button @click="$toast('点击弹出提示')">上方弹出</y-button>
  <y-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</y-button>
  <y-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</y-button>
</div>

<style>
.y-toast {
  z-index: 30 !important;
}
</style>
```

## 设置关闭按钮

### 预览

<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>

### 代码

```html
<div>
  <y-button @click="onClickButton">上方弹出</y-button>
</div>

<script>
export default {
  components: {
    YButton
  },
  methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  },
}
</script>

<style>
.y-toast {
  z-index: 30 !important;
}
</style>
```

## 支持 HTML

### 预览

<ClientOnly>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

### 代码

```html
<div>
  <y-button @click="onClickButton">上方弹出</y-button>
</div>

<script>
export default {
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:red;">strong标签加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>

<style>
.gulu-toast {
  z-index: 30 !important;
}
</style>
```