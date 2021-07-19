import Vue from 'vue'
import App from './App.vue'
import CsButton from './components/button.vue'
import CsDialog from './components/dialog.vue'
import CsInput from './components/input.vue'
import './assets/fonts/font.scss'
Vue.config.productionTip = false
Vue.component(CsButton.name, CsButton)
Vue.component(CsDialog.name, CsDialog)
Vue.component(CsInput.name, CsInput)
new Vue({
  render: h => h(App)
}).$mount('#app')
