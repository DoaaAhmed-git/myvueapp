import Vue from 'vue'
import App from './App.vue'
//import VueResource from 'vue-resource'
import doaa from './doaa.vue'

//Vue.use(VueResource);
Vue.component('doaa', doaa);

new Vue({
  el: '#app',
  render: h => h(App)

})
