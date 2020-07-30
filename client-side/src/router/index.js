import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Carts from '../views/Carts.vue';
import Histories from '../views/Histories.vue';
import store from "../store";


Vue.use(VueRouter);

const routes = [


  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        store.commit("SET_LOGIN", true);
      } else {
        store.commit("SET_LOGIN", false);
      }
      next();
    }
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        store.commit("SET_LOGIN", true);
      } else {
        store.commit("SET_LOGIN", false);
      }
      next();
    }
  },
  {
    path: '/history',
    name: 'Histories',
    component: Histories,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        store.commit("SET_LOGIN", true);
      } else {
        store.commit("SET_LOGIN", false);
      }
      next();
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
