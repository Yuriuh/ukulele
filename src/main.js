import Vue from "vue";
import App from "./App.vue";
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'

Vue.component('y-button', Button)
Vue.component('y-icon', Icon)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
