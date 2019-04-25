---
title: Grid
sidebarDepth: 0
---

# 网格

## 24格网格

### 预览

<ClientOnly>
  <grid-demo-1></grid-demo-1>
</ClientOnly>

### 代码
```html
<y-row class="demoRow">
  <y-col span="8">
    <div class="demoCol">8</div>
  </y-col>
  <y-col span="8">
    <div class="demoCol">8</div>
  </y-col>
  <y-col span="8">
    <div class="demoCol">8</div>
  </y-col>
</y-row>
<y-row class="demoRow">
  <y-col span="6">
    <div class="demoCol">6</div>
  </y-col>
  <y-col span="6">
    <div class="demoCol">6</div>
  </y-col>
  <y-col span="6">
    <div class="demoCol">6</div>
  </y-col>
  <y-col span="6">
    <div class="demoCol">6</div>
  </y-col>
</y-row>
<y-row class="demoRow">
  <y-col span="4">
    <div class="demoCol">4</div>
  </y-col>
  <y-col span="4">
    <div class="demoCol">4</div>
  </y-col>
  <y-col span="4">
    <div class="demoCol">4</div>
  </y-col>
  <y-col span="4">
    <div class="demoCol">4</div>
  </y-col>
  <y-col span="4">
    <div class="demoCol">4</div>
  </y-col>
  <y-col span="4">
    <div class="demoCol">4</div>
  </y-col>
</y-row>
<y-row class="demoRow">
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
</y-row>
```

## 设置 gutter

### 预览

<ClientOnly>
  <grid-demo-2></grid-demo-2>
</ClientOnly>

### 代码

```html
<y-row class="demoRow" gutter="10">
  <y-col span="8">
    <div class="demoCol">8</div>
  </y-col>
  <y-col span="8">
    <div class="demoCol">8</div>
  </y-col>
  <y-col span="8">
    <div class="demoCol">8</div>
  </y-col>
</y-row>
<y-row class="demoRow" gutter="10">
  <y-col span="6">
    <div class="demoCol">6</div>
  </y-col>
  <y-col span="6">
    <div class="demoCol">6</div>
  </y-col>
  <y-col span="6">
    <div class="demoCol">6</div>
  </y-col>
  <y-col span="6">
    <div class="demoCol">6</div>
  </y-col>
</y-row>
```

## 设置空隙

### 预览

<ClientOnly>
  <grid-demo-3></grid-demo-3>
</ClientOnly>

### 代码

```html
<y-row class="demoRow" gutter="10">
  <y-col span="8">
    <div class="demoCol">8</div>
  </y-col>
  <y-col span="8" offset="8">
    <div class="demoCol">8</div>
  </y-col>
</y-row>
<y-row class="demoRow" gutter="10">
  <y-col span="6" offset="6">
    <div class="demoCol">6</div>
  </y-col>
  <y-col span="6" offset="6">
    <div class="demoCol">6</div>
  </y-col>
</y-row>
<y-row class="demoRow" gutter="10">
  <y-col span="4">
    <div class="demoCol">4</div>
  </y-col>
  <y-col span="4" offset="4">
    <div class="demoCol">4</div>
  </y-col>
  <y-col span="4" offset="8">
    <div class="demoCol">4</div>
  </y-col>
</y-row>
<y-row class="demoRow" gutter="10">
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2" offset="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2" offset="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2" offset="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2">
    <div class="demoCol">2</div>
  </y-col>
  <y-col span="2" offset="2">
    <div class="demoCol">2</div>
  </y-col>
</y-row>
```