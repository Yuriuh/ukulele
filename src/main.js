import Vue from "vue";
import App from "./App.vue";
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'
import ButtonGroup from './components/Button-Group.vue'
import Input from './components/Input.vue'
import Row from './components/grid/Row.vue'
import Col from './components/grid/Col.vue'
import Layout from './components/layout/Layout.vue'
import Header from './components/layout/Header.vue'
import Content from './components/layout/Content.vue'
import Sider from './components/layout/Sider.vue'
import Footer from './components/layout/Footer.vue'
import Toast from './components/Toast.vue'
import Tabs from './components/tabs/Tabs.vue'
import TabsHead from './components/tabs/Tabs-Head.vue'
import TabsBody from './components/tabs/Tabs-Body.vue'
import TabsItem from './components/tabs/Tabs-Item.vue'
import TabsPane from './components/tabs/Tabs-Pane.vue'
import Popover from './components/Popover.vue'
import plugin from "./components/plugin";


Vue.component('y-button', Button)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)
Vue.component('y-input', Input)
Vue.component('y-row', Row)
Vue.component('y-col', Col)
Vue.component('y-layout', Layout)
Vue.component('y-header', Header)
Vue.component('y-content', Content)
Vue.component('y-sider', Sider)
Vue.component('y-footer', Footer)
Vue.component('y-toast', Toast)
Vue.component('y-tabs', Tabs)
Vue.component('y-tabs-head', TabsHead)
Vue.component('y-tabs-body', TabsBody)
Vue.component('y-tabs-item', TabsItem)
Vue.component('y-tabs-pane', TabsPane)
Vue.component('y-popover', Popover)
Vue.use(plugin)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

// 单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// const expect = chai.expect

// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-settings')
//   vm.$el.remove()
//   vm.$destroy()
// }

// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings',
//       loading: true
//     }
//   })
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
//   vm.$el.remove()
//   vm.$destroy()
// }

// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('1')
//   vm.$el.remove()
//   vm.$destroy()
// }

// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings',
//       iconPosition: 'right'
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('2')
//   vm.$el.remove()
//   vm.$destroy()
// }

// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   vm.$mount()
//   let spy = chai.spy(function () {})
//   vm.$on('click', spy)
//   // 希望这个函数被执行
//   let button = vm.$el
//   button.click()
//   expect(spy).to.have.been.called()
// }
