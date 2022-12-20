import {
  createApp
} from 'vue'
import App from './App.vue'
//import router
import router from './router'
//import Bootstrap, Popper, jQuery
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

// import Datepicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'

import VueCookies from 'vue-cookies'
const app = createApp(App)

app.use(VueCookies)
// app.component('Datepicker', Datepicker);

//use vue router
app.use(router)
app.mount('#app')