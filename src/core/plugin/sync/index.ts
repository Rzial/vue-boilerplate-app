import { App } from 'vue';
import { Store } from 'vuex';
import { Router } from 'vue-router';
import { sync } from 'vuex-router-sync';

import StoreInterface from '@/src/core/store/common/interface';

export default {
    install(app: App): void {
        const store: Store<StoreInterface> = app.config.globalProperties.$store;
        const router: Router = app.config.globalProperties.$router;

        const unsync = sync(store, router);
        const unmountApp = app.unmount;
        app.unmount = function (...args) {
            unsync();
            unmountApp.call(this, args);
        };
    },
};
