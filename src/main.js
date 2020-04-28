// console.log("ok")
//导入vue插件
import Vue from "../node_modules/vue/dist/vue.js"
//app引入
import App from './App.vue'
//导入mint-ui包
import '../node_modules/mint-ui/lib/style.min.css'
import { Header ,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//必须在main。js中引入

import VueRouter from 'vue-router'
Vue.use(VueRouter)


//导入resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入mui包

import '../lib/mui/css/mui.min.css'
import '../lib/mui/fonts/mui.ttf'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'

import router from './router.js'

let vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c=>c(App),
    router 
})