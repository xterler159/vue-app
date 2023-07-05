<template>
  <div class="app-container">
    <Navbar />

    <RouterView v-slot="{ Component }">
      <component :is="Component"></component>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>
