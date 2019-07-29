import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import index from './views/UserList/index.vue';
import Card from './components/card.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/userList',
      name: 'userList',
      component: index,
      children: [
        {
          path: '/',
          component: Card
        }
      ]
    },
  ],
});
