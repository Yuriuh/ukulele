---
title: Button
sidebarDepth: 0
---
# 按钮

## 简单用法

### 预览

<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

### 代码

```html
<y-button>默认按钮</y-button>
<y-button icon="settings">图标按钮</y-button>
<y-button :loading="true">加载按钮</y-button>
<y-button disabled>禁用按钮</y-button>
```