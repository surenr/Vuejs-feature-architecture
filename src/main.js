import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import registerFeature from './core.service/services';

import userFeature from './components/feature.user';

Vue.config.productionTip = false;
registerFeature(Vue, store, userFeature);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
