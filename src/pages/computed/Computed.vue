<template>
  <h1 class="text-center">Computed</h1>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const author = reactive({
  name: "John Doe",
  books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
});
</script>
