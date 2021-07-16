import Vue from 'vue'
import Router from 'vue-router'

import Home from "../views/Home";
import Danmu from "../views/Danmu";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path: '/danmu',
      component: Danmu
    }
  ],
  mode: 'history'
})
