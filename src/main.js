import Vue from 'vue';
import App from './App.vue';

import alertText from './utils';
import { hello, motivation } from './constans';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alertText(hello);
alertText(motivation);
