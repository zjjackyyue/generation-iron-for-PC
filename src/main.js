import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import Demo from './Demo.vue'
import { createRouter, createWebHistory } from 'vue-router'

const About = Demo

const routes = [
    {
        path: '/',
        component: Demo
    },
    {
        path: '/about',
        components: {
            About
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(Antd)
app.mount('#app')
