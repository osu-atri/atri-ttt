<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const tabActive = computed(() => useRoute().name)
</script>

<template>
  <header>
    <h1>{{ tabActive }}</h1>
  </header>
  <main>components</main>
</template>

<style></style>
