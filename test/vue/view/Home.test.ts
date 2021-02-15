import { shallowMount } from '@vue/test-utils';

import Home from '@/vue-view/Home.vue';

describe('<Home>', () => {
    it('Get <Home>', function () {
        const wrapper = shallowMount(Home, {});

        expect(wrapper.vm).toBeTruthy();
    });
});
