import Vue from 'vue'
import App from './App.vue'
import Aos from 'aos'

import 'aos/dist/aos.css'

Aos.init({
    duration: 1200
})
Vue.use(Aos)

new Vue({
    render: h => h(App),
}).$mount('#app')