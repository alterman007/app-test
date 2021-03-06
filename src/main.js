import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './components/globalRegister';

import './assets/styles/normalize.css';
import './assets/styles/global.styl';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
