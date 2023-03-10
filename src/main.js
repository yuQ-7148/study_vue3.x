import './assets/css/bootstrap.css'
import './index.css'
import axios from 'axios'
import router from './components/20.vue-router/router.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/05.class&style/App.vue'
// import App from './components/06.Count/App.vue'
// import App from './components/07.customEvent/App.vue'
// import App from './components/08.v-model/App.vue'
// import App from './components/09.watch/App.vue'
// import App from './components/10.life-cycle/App.vue'
// import App from './components/11.brother/App.vue'
// import App from './components/12.provide&injict/App.vue'
// import App from './components/13.network/App.vue'
// import App from './components/14.ref/App.vue'
// import App from './components/15.$nextTick/App.vue'
import App from './components/20.vue-router/App.vue'


import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        addN(state, step) {
            state.count += step
        }
    },
    actions: {
        addAsync(context, step) {
            setTimeout(() => {
                context.commit('addN', step)
            }, 1000)
        }
    },
    getters: {
        showNum: state => {
            return '数据是：' + state.count
        }
    }
})


const app = createApp(App)

app.use(store)
app.use(ElementPlus)
app.use(router)
axios.defaults.baseURL = 'https://www.escook.cn'


axios.interceptors.request.use(config => {
    console.log(config);
    config.headers.Authorization = 'Bearer xxx'
    return config
})

app.config.globalProperties.$http = axios

// app.directive('focus', {
//     mounted(el) {
//         el.focus()
//     },
//     updated(el) {
//         el.focus()
//     }
// })

// app.directive('focus', (el) => { el.focus() })
// app.directive('color', (el, binding) => { el.style.color = binding.value })

app.mount('#app')



//全局注册组件
import Swiper from './components/01.globalReg/Swiper.vue'
import Test from './components/01.globalReg/Test.vue'
app.component(Swiper.name, Swiper)
app.component('MyTest', Test)
