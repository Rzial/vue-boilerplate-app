import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import sync from '@/src/core/plugin/sync';

describe('Vue Plugin: sync', () => {
    afterEach(() => (document.body.innerHTML = ''));

    it("Sync don't throws error", function (done) {
        document.body.innerHTML = '<div id="app"></div>';

        const app = createApp({
            mounted() {
                setTimeout(() => app.unmount('#app'), 1);
            },
            unmounted() {
                done();
            },
            template: '<div></div>',
        });

        const store = createStore({});
        const router = createRouter({
            history: createWebHistory('/'),
            routes: [{ name: 'Foo', path: '/', component: {} }],
        });

        app.use(store);
        app.use(router);

        expect(() => app.use(sync)).not.toThrow();

        app.mount('#app');
    });
});
