import Vue from 'vue'
import App from './App.vue'
import CsButton from './components/button.vue'
import CsDialog from './components/dialog.vue'
import CsInput from './components/input.vue'
import CsSwitch from './components/switch.vue'
import CsRadio from './components/radio.vue'

import './assets/fonts/font.scss'
Vue.config.productionTip = false
Vue.component(CsButton.name, CsButton)
Vue.component(CsDialog.name, CsDialog)
Vue.component(CsInput.name, CsInput)
Vue.component(CsSwitch.name, CsSwitch)
Vue.component(CsRadio.name, CsRadio)
new Vue({
  render: h => h(App)
}).$mount('#app')
