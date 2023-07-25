import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'
import VueClipboard from 'vue-clipboard2'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueClipboard)
Chart.plugins.unregister(ChartDataLabels);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

Vue.filter('cut', function (value) {
  if(value.length > 20)
  return value.substr(0,8) +'...'+value.substr(-8)
  else
  return value
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
