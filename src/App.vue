<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <div id="menu">
        <div id="menu__logo" style="margin-right: 0.5rem">
            <img src="./assets/logo.png" alt="logo" style="width: 40px" />
            <span>atri-ttt</span>
        </div>
        <menu id="menu__tools" style="margin-right: auto">
            <li>{{ $t("message.menu_tools_file") }}</li>
            <li>{{ $t("message.menu_tools_edit") }}</li>
            <li>{{ $t("message.menu_tools_view") }}</li>
            <li>{{ $t("message.menu_tools_help") }}</li>
        </menu>
        <menu id="menu__tabs">
            <li>{{ $t("message.menu_tabs_translate") }}</li>
            <li>{{ $t("message.menu_tabs_timing") }}</li>
            <li>{{ $t("message.menu_tabs_effect") }}</li>
            <li>{{ $t("message.menu_tabs_check") }}</li>
        </menu>
    </div>
    <div id="main"></div>
</template>

<style scoped>
#menu {
    height: 6dvh;
    padding: 0 0.8rem;

    display: flex;

    /* each menu layout */
    > menu {
        background-color: var(--background-vice);

        display: flex;
        align-items: center;
        /* each menu item */
        > li {
            color: #83b8a7;
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 1rem;
            cursor: pointer;

            &:hover {
                background-color: var(--element-active);
            }
        }
    }
}

#main {
    height: 94dvh;
}

#menu__logo {
    display: flex;
    align-items: center;
}
li {
    list-style: none;
}
</style>
