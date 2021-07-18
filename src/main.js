import Vue from 'vue'
import App from './App.vue'
import CsButton from './components/button.vue'
Vue.config.productionTip = false
Vue.component(CsButton.name, CsButton)
new Vue({
  render: h => h(App)
}).$mount('#app')
