<template>
  <div>
    <h1 class="text-center">Hello component, with composition API</h1>
    <h2>Props:</h2>
    <code>{{ JSON.stringify(props) }}</code>
  </div>
</template>

<script setup lang="ts">
// we can declare props in this way too
// const props = defineProps(["welcome-msg"]);

// this is the best way to declare props
interface HelloCompositionAPIProps {
  welcomeMsg: string;
}

const props = defineProps<HelloCompositionAPIProps>();

console.log("<HelloCompositionAPI /> props:", props);
</script>
