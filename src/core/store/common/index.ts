import { StoreOptions } from 'vuex';
import StoreInterface from './interface';

import ExampleModule from '../module/example';

export default {
    modules: {
        example: ExampleModule,
    },
    state: {
        default: '',
    },
} as StoreOptions<StoreInterface>;
