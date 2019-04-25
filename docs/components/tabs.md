---
title: Tabs
sidebarDepth: 0
---
# 按钮

## 简单用法

### 预览

<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

### 代码

```html
<y-tabs :selected="selected">
  <y-tabs-head>
    <y-tabs-item name="1">1</y-tabs-item>
    <y-tabs-item name="2">2</y-tabs-item>
  </y-tabs-head>
  <y-tabs-body>
    <y-tabs-pane name="1">content 1</y-tabs-pane>
    <y-tabs-pane name="2">content 2</y-tabs-pane>
  </y-tabs-body>
</y-tabs>
```
