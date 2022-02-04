import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import WebFont from 'webfontloader';

const vuetify = createVuetify();

WebFont.load({ google: { families: ['Gowun Batang'] } });
createApp(App).use(store).use(router).use(vuetify).mount('#app');
