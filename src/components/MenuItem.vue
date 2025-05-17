<script setup>
import { onMounted, ref, useTemplateRef } from 'vue'

const lastMenuItem = ref(false)
const submenu = useTemplateRef('submenu')

onMounted(() => {
  lastMenuItem.value = submenu.value.children.length === 0
})
</script>

<template>
  <button class="menu-item" :class="{ 'last-menu-item': lastMenuItem }">
    <p>
      <slot>item</slot>
    </p>

    <menu class="submenu" ref="submenu">
      <slot name="submenu"></slot>
    </menu>
  </button>
</template>

<style scoped>
.menu-item {
  position: relative;

  height: 100%;
  border: 0;
  padding: 0.5rem 1rem;

  background-color: inherit;
  white-space: nowrap;
  transition: 0.2s;

  &:hover {
    background-color: #ddeded;
    & > .submenu {
      display: flex;
      left: 100%;
      top: 0;
    }
  }

  > p {
    font-size: 15px;
  }
}

.submenu {
  position: absolute;
  display: none;

  padding: 0;
  flex-direction: column;
  background-color: #545454;
}

/* close menu after clicking */
.last-menu-item:focus {
  display: none;
}
:not(.last-menu-item) > p::after {
  content: '>';
}

:deep(hr) {
  margin: 0 1rem;
  border: 1px;
  padding: 0.05em;
  background-color: #ddeded;
}
</style>
