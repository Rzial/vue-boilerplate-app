import { createApp } from 'vue';

import store from './core/store';
import router from './core/router';
import plugins from './core/plugin';

import App from './core/App.vue';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(plugins);

app.mount('#app');
export default app;
