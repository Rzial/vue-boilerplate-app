import { App } from 'vue';

import sync from './sync';
import element from './element';

export default {
    install(app: App): void {
        app.use(sync);
        app.use(element);
    },
};
