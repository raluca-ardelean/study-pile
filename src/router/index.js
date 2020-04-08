import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: HomePage
        }
    ]
})