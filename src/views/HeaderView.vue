<script setup>
import { RouterLink } from 'vue-router'
import MenuItem from '@/components/MenuItem.vue'
</script>

<template>
  <header id="header">
    <RouterLink to="/">
      <img id="topbar__logo" alt="atri-ttt-logo" />
    </RouterLink>
    <div id="topbar">
      <div id="topbar__menu">
        <MenuItem
          >file
          <template #submenu>
            <MenuItem
              >open
              <template #submenu>
                <MenuItem>open with</MenuItem>
                <hr />
                <MenuItem>import from url</MenuItem>
              </template>
            </MenuItem>
            <MenuItem>save</MenuItem>
          </template>
        </MenuItem>
        <MenuItem>edit</MenuItem>
        <MenuItem>view</MenuItem>
      </div>
      <div id="topbar__tab">
        <RouterLink draggable="false" to="translate">Translate</RouterLink>
        <RouterLink draggable="false" to="timing">Timing</RouterLink>
        <RouterLink draggable="false" to="effect">Effect</RouterLink>
        <RouterLink draggable="false" to="verify">Verify</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
#header {
  background-color: #445454;
  min-height: 5vh;
  padding: 0 1rem;
  display: flex;
}
#topbar {
  flex: 1;

  position: relative;
  display: flex;
  justify-content: space-between;
}
#topbar > div {
  background-color: #546666;
  display: flex;
  align-items: stretch;
}

/* specified menu-item styles for topbar__menu */
#topbar__menu > :deep(.menu-item) {
  padding: 0 1rem;

  &:hover {
    background-color: #779999;
    > .submenu {
      display: none;
    }
  }
  &:focus-within {
    background-color: #ddeded;
    > .submenu {
      display: flex;
      top: 100%;
      left: 0;
    }
  }
}
/* topbar__menu don't show expand icon of submenu */
#topbar__menu > .menu-item > :deep(p::after) {
  display: none;
}

/* override default RouterLink styles */
#topbar__tab > * {
  color: #000;
  align-content: center;
  padding: 0 1rem;

  &:hover {
    background-color: #779999;
  }
}
.router-link-active {
  background-color: #ddeded;
}

main {
  min-height: 100%;
}
</style>
