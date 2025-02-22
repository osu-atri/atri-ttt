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
            <li>file</li>
            <li>edit</li>
            <li>view</li>
            <li>help</li>
        </menu>
        <menu id="menu__tabs">
            <li>translate</li>
            <li>timing</li>
            <li>effect</li>
            <li>check</li>
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
