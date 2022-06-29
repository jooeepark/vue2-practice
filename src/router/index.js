import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about1',
    name: 'about1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About1View.vue')
  },
  {
    path: '/about2',
    name: 'about2',
    component: () => import(/* webpackChunkName: "about" */ '../views/About2View.vue')
  },
  {
    path: '/about3',
    name: 'about3',
    component: () => import(/* webpackChunkName: "about" */ '../views/About3View.vue')
  },
  {
    path: '/about4',
    name: 'about4',
    component: () => import(/* webpackChunkName: "about" */ '../views/About4View.vue')
  },
  {
    path: '/about5',
    name: 'about5',
    component: () => import(/* webpackChunkName: "about" */ '../views/About5View.vue')
  },
  {
    path: '/about6',
    name: 'about6',
    component: () => import(/* webpackChunkName: "about" */ '../views/About6View.vue')
  },
  {
    path: '/about7',
    name: 'about7',
    component: () => import(/* webpackChunkName: "about" */ '../views/About7View.vue')
  },
  {
    path: '/about8',
    name: 'about8',
    component: () => import(/* webpackChunkName: "about" */ '../views/About8View.vue')
  },
  {
    path: '/about9',
    name: 'about9',
    component: () => import(/* webpackChunkName: "about" */ '../views/About9View.vue')
  },
  {
    path: '/about10',
    name: 'about10',
    component: () => import(/* webpackChunkName: "about" */ '../views/About10View.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
