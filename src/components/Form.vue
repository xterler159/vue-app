<template>
  <h1>Demo form</h1>

  <label>Name: </label>
  <input type="text" v-model="nameInputRef" />
  <br />
  <label>Age: </label>
  <input type="number" @input="handleAgeInput" :value="ageInput" />
  <br />

  <code>name: {{ nameInputRef }} ageInput: {{ ageInput }}</code>
</template>

<script setup lang="ts">
import { ref } from "vue";

const ageInput = ref<number>();
const nameInputRef = ref<string>("");

const handleAgeInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  ageInput.value = parseInt(value);
};
</script>
