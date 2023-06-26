<template>
  <div class="app-container">
    <Navbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>
