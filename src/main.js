import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import Phone from './components/phone//phone.vue'
import Plat from './components/plat//plat.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

router.map({   
    'phone': {
        name: 'phone',
        component: Phone,
        
    },
    'plat': {
         name: 'plat',
    	component: Plat ,
    }
    
})

router.redirect({
    '*': '/phone'
})

router.start(App, '#app')