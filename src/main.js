import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueChatScroll from 'vue-chat-scroll'

import App from './App.vue'
import router from './router'
import store from './store/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.useContext(BootstrapVue)
Vue.useContext(VueChatScroll)

new.Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')