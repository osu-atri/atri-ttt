<script setup>
import Welcome from '@/components/Welcome.vue'
</script>

<template>
  <main>
    <Welcome />
    <div>
      <p>open</p>
      <p>new</p>
      <p>about</p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: minmax(min-content, 30vh) auto;
  place-items: center;
}
</style>
