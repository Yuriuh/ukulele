---
title: Popover
sidebarDepth: 0
---

# Popover

## 支持 HTML

### 预览

<ClientOnly>
  <popover-demo-1></popover-demo-1>
</ClientOnly>

### 代码

```html
<y-popover>
  <y-button>上方弹出</y-button>
  <template slot="content">
    弹出内容
  </template>
</y-popover>
<y-popover position="bottom">
  <y-button>下方弹出</y-button>
  <template slot="content">
    弹出内容
  </template>
</y-popover>
<y-popover position="left">
  <y-button>左边弹出</y-button>
  <template slot="content">
    弹出内容
  </template>
</y-popover>
<y-popover position="right">
  <y-button>右边弹出</y-button>
  <template slot="content">
    弹出内容
  </template>
</y-popover>
```

## 将触发方式改为 hover

### 预览

<ClientOnly>
  <popover-demo-2></popover-demo-2>
</ClientOnly>

### 代码

```html
<y-popover trigger="hover">
    <y-button>上方弹出</y-button>
    <template slot="content">
      弹出内容
    </template>
  </y-popover>
  <y-popover position="bottom" trigger="hover">
    <y-button>下方弹出</y-button>
    <template slot="content">
      弹出内容
    </template>
  </y-popover>
  <y-popover position="left" trigger="hover">
    <y-button>左边弹出</y-button>
    <template slot="content">
      弹出内容
    </template>
  </y-popover>
  <y-popover position="right" trigger="hover">
    <y-button>右边弹出</y-button>
    <template slot="content">
      弹出内容
    </template>
  </y-popover>
</div>
```