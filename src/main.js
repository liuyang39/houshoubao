import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import Phone from './components/phone//phone.vue'
// import PhoneType from './components/phone/phonetype.vue'
// import Plat from './components/plat/plat.vue'

// new Vue({
//   el: 'body',
//   components: { App }
// })
Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

router.map({
	// 'plat':｛
    // 	component: Plat,
    // ｝
    
    'phone': {
        component: Phone,
        
    },
    // 'plat': {
    // 	component: Plat,
    // }
    
})

router.redirect({
    '*': '/phone'
})

router.start(App, '#app')