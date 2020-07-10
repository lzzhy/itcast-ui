import Vue from 'vue'
import App from './App.vue'
import button from './components/button'
import dialog from './components/dialog'
import input from './components/input'
import switchs from './components/switch.vue'


Vue.config.productionTip = false

Vue.component(button.name,button)
Vue.component(dialog.name,dialog)
Vue.component(input.name,input)
Vue.component(switchs.name,switchs)

new Vue({
  render: h => h(App),
}).$mount('#app')
