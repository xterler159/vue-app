<template>
  <h1>{{ "<Slots />" }}</h1>
  <FancyButton :on-click="onClickBtnHandler">My fancy button</FancyButton>
</template>

<script setup lang="ts">
import FancyButton from "./FancyButton.vue";

const onClickBtnHandler = () => console.log("clicked !");
</script>
