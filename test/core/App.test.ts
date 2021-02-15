import { shallowMount } from '@vue/test-utils';

import App from '@/src/core/App.vue';

describe('<App>', () => {
    it('Get <App>', function () {
        const wrapper = shallowMount(App, {
            global: {
                stubs: ['el-container', 'el-header', 'el-main', 'router-view'],
            },
        });

        expect(wrapper.vm).toBeTruthy();
    });
});
