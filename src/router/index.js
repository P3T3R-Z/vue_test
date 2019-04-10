import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import New from '@/pages/new'
import Notfound from '@/pages/Notfound'
import Params from '@/pages/params'
import Detail from '@/pages/detail'
import NewsDetails from '@/pages/newsDetail'
import More from '@/pages/more'
import moreadd from "@/pages/moreadd"
import morelist from "@/pages/morelist"

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    //动态路由
    {
      path: '/Params/:id',
      name: 'Params',
      component: Params
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/newsDetail/:aid',
      name: 'newsDetails',
      component: NewsDetails
    },
    {
      path: '/more',
      component: More,
      redirect: '/more/moreadd',
      children: [
        {
          path:'moreadd',
          component: moreadd
        },
        {
          path:'morelist',
          component: morelist
        }
      ]
    },
    {
      path: '*',
      name: 'notfound',
      component: Notfound
    }
  ]
})
