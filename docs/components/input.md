---
title: Input
sidebarDepth: 0
---

# 输入框

## 简单用法

### 预览
<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

### 代码
```html
<y-input value="中文"></y-input>
<y-input value="disabled" disabled></y-input>
<y-input value="readonly" readonly></y-input>
```

## 双向绑定

### 预览
<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>

### 代码
```html
<y-input v-model="value"></y-input>
<div> value: {{value}} </div>
```