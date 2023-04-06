import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'



//import sidebar from '.component/sidebar.vue'
//import topbar from '.component/topbar.vue'
//import VueResource from 'vue-resource'
//import VueRouter from 'vue-router'
//import Routes from './routes'

//Vue.use(VueResource);
//Vue.use(VueRouter);

//Vue.component('topbar' , topbar)
//Vue.component('sidebar' , sidebar);

//const router = new VueRouter({
//routes: Routes});

new Vue({
  el: '#app',
  store,
  render: h => h(App)

  
 // router: router
})
