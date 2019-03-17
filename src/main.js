import Vue from "vue";
import App from "./App.vue";
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'
import ButtonGroup from './components/Button-Group.vue'

Vue.component('y-button', Button)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
