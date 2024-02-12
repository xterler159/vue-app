<template>
  <h1 class="text-center">Computed</h1>
  <button @click="addBook">Add book</button>
  <button @click="removeBook">Delete book</button>

  <h2>Did the author published books? - {{ publishedBooksMessage }}</h2>
  <pre>{{ authorData }}</pre>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";

const authorData = reactive({
  name: "John Doe",
  books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
});

const addBook = () => authorData.books.push(`Vue ${authorData.books.length}`);
const removeBook = () => authorData.books.pop();

const publishedBooksMessage = computed(() => {
  return authorData.books.length > 0 ? "Yes" : "No";
});
</script>
