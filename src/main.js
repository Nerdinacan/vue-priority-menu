import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
import { debugging } from "./components/plugins";
import "./styles.scss";

Vue.use(BootstrapVue);
Vue.use(debugging);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
