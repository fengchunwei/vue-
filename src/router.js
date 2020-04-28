import Vue from "../node_modules/vue/dist/vue.js"
//
//报错提示oly 引用包不对
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//

import home from './components/tabbar/Home.vue'
import member from './components/tabbar/Member.vue'
import car from './components/tabbar/Shopcar.vue'
import search from './components/tabbar/Search.vue'
import newslist from './components/news/Newslist.vue'
import goodslist from './components/goods/Goodslist.vue'
let router = new  VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/car',component:car},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newslist},
        {path:'/home/goodslist',component:goodslist},
    ],
    linkActiveClass:'mui-active'
})

export default router