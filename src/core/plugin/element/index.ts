import { App } from 'vue';

import 'reset-css';
import 'element-plus/lib/theme-chalk/index.css';

import ElementPlus from 'element-plus';

export default {
    install(app: App): void {
        app.use(ElementPlus);
    },
};
