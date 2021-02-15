<template lang="pug">
section
    el-container
        el-header
            Nav
        el-main
            router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Nav from '@/vue-component/Nav.vue';

export default defineComponent({
    components: {
        Nav,
    },
});
</script>

<style lang="scss" src="./App.scss" />
