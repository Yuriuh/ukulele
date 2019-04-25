---
title: Collapse
sidebarDepth: 0
---

# Collapse

## 支持展开多个

### 预览

<ClientOnly>
  <collapse-demo-1></collapse-demo-1>
</ClientOnly>

### 代码

```html
<y-collapse :selected.sync="selectedTab">
  <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
  <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
  <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
</y-collapse>

<script>
export default {
  data () {
    return {
      selectedTab: ['1', '2']
    }
  }
}
</script>
```

## 支持单个模式

### 预览

<ClientOnly>
  <collapse-demo-2></collapse-demo-2>
</ClientOnly>

### 代码

```html
<y-collapse :selected.sync="selectedTab" single>
  <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
  <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
  <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
</y-collapse>

<script>
export default {
  data () {
    return {
      selectedTab: ['1']
    }
  }
}
</script>
```