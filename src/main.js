import Vue from 'vue'
import App from './App.vue'
import button from './components/button'
import dialog from './components/dialog'
import input from './components/input'
import switchs from './components/switch.vue'
import radio from './components/radio.vue'
import radiogroup from './components/radio-group.vue'
import checkbox from './components/checkbox.vue'
import checkboxgroup from './components/checkbox-group.vue'

Vue.config.productionTip = false

Vue.component(button.name,button)
Vue.component(dialog.name,dialog)
Vue.component(input.name,input)
Vue.component(switchs.name,switchs)
Vue.component(radio.name,radio)
Vue.component(radiogroup.name,radiogroup)
Vue.component(checkbox.name,checkbox)
Vue.component(checkboxgroup.name,checkboxgroup)

new Vue({
  render: h => h(App),
}).$mount('#app')
