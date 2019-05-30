<template>
  <div id="app" style="margin-top: 200px; padding: 0 100px 0 100px">

    <div class="box">
      <y-input value="张三" disabled></y-input>
      <y-input value="张三" readonly></y-input>
      <y-input value="李四"></y-input>
    </div>

    <div class="box">
      <y-input
        value="王五"
        error="姓名不能大于五个字"
        @change="inputChange"
      ></y-input>
    </div>

    <!-- <div class="box">
      <y-input v-model="message"></y-input>
      <p>{{ message }}</p>
      <button @click="message+=1">+1</button>
    </div> -->

    <!-- <div class="box">
      <y-button
        :loading="loading1"
        icon-position="left"
        @click="loading1 = !loading1"
      >
        按钮
      </y-button>

      <y-button
        :loading="loading2"
        icon="settings" icon-position="right"
        @click="loading2 = !loading2"
      >
        按钮
      </y-button>

      <y-button
        :loading="loading3"
        icon="settings"
        @click="loading3 = !loading3"
      >
        按钮
      </y-button>

      <y-button-group>
        <y-button icon="back">上一页</y-button>
        <y-button>更多</y-button>
        <y-button icon="right" icon-position="right">下一页</y-button>
      </y-button-group>
    </div> -->
    
    <!-- <div style="border: 1px solid black">
      <y-row gutter="20">
        <y-col
          span="24"
          :ipad="{span:8}"
          :narrow-pc="{span:4}"
          :pc="{span:2}"
          :wide-pc="{span:1}"
        >
          <div style="height: 50px;background: #eee"></div>
        </y-col>
        <y-col 
          span="24"
          :ipad="{span:16}"
          :narrow-pc="{span:20}"
          :pc="{span:22}"
          :wide-pc="{span:23}"
        >
          <div style="height: 50px;background: pink"></div>
        </y-col>
      </y-row>
    </div> -->

    <!-- <y-layout>
      <y-header class="demo">header</y-header>
      <y-content class="demo">content</y-content>
      <y-footer class="demo">footer</y-footer>
    </y-layout> -->
      
    <!-- <y-layout style="height: 100vh">
      <y-sider>sider</y-sider>
      <y-layout>
        <y-header>header</y-header>
        <y-content>content</y-content>
        <y-footer>footer</y-footer>
      </y-layout>
    </y-layout> -->

    <!-- <button @click="showToast('top')">top</button> -->
    <!-- <button @click="showToast('middle')">middle</button> -->
    <!-- <button @click="showToast('bottom')">bottom</button> -->

    <!-- <y-tabs :selected="selectedTab" @update:selected="selectedTab = $event"> -->
    <!-- <y-tabs :selected.sync="selectedTab">
      <y-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <y-tabs-item name="woman" disabled>
          <y-icon name="settings"></y-icon>美女
        </y-tabs-item>
        <y-tabs-item name="finance">
          财经
        </y-tabs-item>
        <y-tabs-item name="sports">
          体育
        </y-tabs-item>
      </y-tabs-head>
      <y-tabs-body>
        <y-tabs-pane name="woman">
          美女相关资讯
        </y-tabs-pane>
        <y-tabs-pane name="finance">
          财经相关资讯
        </y-tabs-pane>
        <y-tabs-pane name="sports">
          体育相关资讯
        </y-tabs-pane>
      </y-tabs-body>
    </y-tabs> -->

    <!-- <y-popover>
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
    </y-popover> -->

    <!-- <y-collapse :selected.sync="selectedTab">
      <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
      <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
      <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
    </y-collapse> -->

    
    
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    
  },
  data () {
    return {
      loading1: true,
      loading2: false,
      loading3: true,
      message: '',
      // selectedTab: 'sports'
      selectedTab: ['1', '2'],
      items: [1,2,3]
    }
  },
  methods: {
    inputChange (v) {
      console.log(v)
    },
    showToast (position) {
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback () {
            console.log('他说已经充值了智商')
          }
        },
        autoClose: 2
      })
    }
  },
  created () {

  },
  mounted() {

  },
}
</script>

<style lang="scss">
#app {
  margin-left: 300px;
}
.sider {
  background: #333;
  width: 200px;
}
.header {
  background: #999;
  height: 100px;
}
.footer {
  background: #ccc;
  height: 50px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
body {
  font-size: var(--font-size);
}

.box {
  margin-top: 20px;
}
</style>
