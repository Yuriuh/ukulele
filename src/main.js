import Vue from "vue";
import App from "./App.vue";
import Button from './components/Button.vue'

Vue.component('y-button', Button)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
