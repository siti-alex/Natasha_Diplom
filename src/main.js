import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import Store from './configuration/store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  data: Store,
  router,
  render: h => h(App)
}).$mount('#app')
