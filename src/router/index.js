import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Itemlist from '../views/itemslist'
import Allcard from '../components/allcard'
import showcard from "@/components/showcard";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/itemlist',
    name:'Itemlist',
    component:Itemlist
  },
  {
    path:'/allcard',
    name:'allcard',
    component:Allcard
  },
  {
    path:'/showcard/:card_id',
    name:'showcard',
    component:showcard
  }
]

const router = new VueRouter({
  routes
})

export default router
