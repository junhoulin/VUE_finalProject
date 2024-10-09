import { createApp } from 'vue';
import axios from 'axios';
import 'bootstrap';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import App from './App.vue';
import router from './router';
import { currency } from './methods/filters';
import $httpMessageState from './methods/pushMessage';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
};
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(VueAxios, axios);
app.use(router);
app.component('LoadingApp', Loading);
app.mount('#app');
