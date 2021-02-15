<template lang="pug">
el-menu(default-active="1" mode="horizontal")
    el-menu-item(index="1") Example
    el-submenu(index="2")
        template(#title) Submenu
        el-menu-item(index="2-1") Item 1
        el-menu-item(index="2-2") Item 2
        el-menu-item(index="2-3") Item 3
        el-submenu(index="2-4")
            template(#title) Item 4
            el-menu-item(index="2-4-1") Item 1
            el-menu-item(index="2-4-2") Item 2
            el-menu-item(index="2-4-3") Item 3
    el-menu-item(index="2" disabled) Disabled
    el-menu-item(index="3")
        a(href="http://www.google.com" target="_blank") External
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" src="./Nav.scss" scoped />
