<template>
  <div class="app-container">
    <navbar />

    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>
