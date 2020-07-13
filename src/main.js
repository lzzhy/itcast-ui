import Vue from 'vue'
import App from './App.vue'
import button from './components/button'
import dialog from './components/dialog'
import input from './components/input'
import switchs from './components/switch.vue'
import radio from './components/radio.vue'
import radiogroup from './components/radio-group.vue'

Vue.config.productionTip = false

Vue.component(button.name,button)
Vue.component(dialog.name,dialog)
Vue.component(input.name,input)
Vue.component(switchs.name,switchs)
Vue.component(radio.name,radio)
Vue.component(radiogroup.name,radiogroup)

new Vue({
  render: h => h(App),
}).$mount('#app')
