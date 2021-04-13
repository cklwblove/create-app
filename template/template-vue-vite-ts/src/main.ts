import './assets/style/app.less';

import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import './router/router.interceptor';
import { setGlobalProperties } from '/@/services';
import { setApp } from './useApp';

const app = createApp(App);

setGlobalProperties(app);
setupRouter(app);

app.mount('#app');
setApp(app);
