import Vue from 'vue';
import Router from 'vue-router';
import Page1 from './views/Page1';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/page1',
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1,
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import(/* webpackChunkName: "page2" */ './views/Page2.vue'),
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import(/* webpackChunkName: "page2" */ './views/Page3.vue'),
    },
  ],
});
