---
title: Layout
sidebarDepth: 0
---

# 布局

## 默认布局

### 预览

<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>

### 代码

```html
<y-layout style="color: white;">
  <y-header style="height: 50px; background:lightskyblue;">
    header
  </y-header>
  <y-content style="height: 100px; background:deepskyblue;">
    content
  </y-content>
  <y-footer style="height: 50px; background:lightskyblue;">
    footer
  </y-footer>
</y-layout>
```

## 增加侧边栏

### 预览

<ClientOnly>
  <layout-demo-2></layout-demo-2>
</ClientOnly>

### 代码

```html
<y-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <y-header style="height: 50px; background:lightskyblue;">
    header
  </y-header>
  <y-layout>
    <y-sider style="height: 100px; background:#ddd; width:200px; color: black;">
      sider
    </y-sider>
    <y-content style="height: 100px; background:deepskyblue;">
      content
    </y-content>
  </y-layout>
  <y-footer style="height: 50px; background:lightskyblue;">
    footer
  </y-footer>
</y-layout>
```

## 左右布局

### 预览

<ClientOnly>
  <layout-demo-3></layout-demo-3>
</ClientOnly>

### 代码

```html
<y-layout style="color: white; overflow:hidden;">
  <y-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </y-sider>
  <y-layout>
    <y-header style="height: 50px; background:lightskyblue;">
      header
    </y-header>
    <y-content style="height: 100px; background:deepskyblue;">
      content
    </y-content>
    <y-footer style="height: 50px; background:lightskyblue;">
      footer
    </y-footer>
  </y-layout>
</y-layout>
```