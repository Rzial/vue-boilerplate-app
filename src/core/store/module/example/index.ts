import { StoreOptions } from 'vuex';
import ExampleModuleInterface from './interface';

export default {
    state: {
        default: '',
    },
} as StoreOptions<ExampleModuleInterface>;
