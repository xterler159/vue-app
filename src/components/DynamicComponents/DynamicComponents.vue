<template>
  <h1 :class="className">Dynamic Components</h1>

  <p>Click on a tab to see the demo in action...</p>
  <ul class="nav nav-tabs">
    <li class="nav-item" v-for="(_, tab) in tabs" :key="tab" @click="() => handleClickBtn(tab)">
      <button :class="['nav-link', { active: currentTab === tab }]">{{ tab }}</button>
    </li>
  </ul>

  <component :is="tabs[currentTab]"></component>
</template>

<script setup lang="ts">
import { ref } from "vue";

import A from "./A.vue";
import B from "./B.vue";

const currentTab = ref<string | null>(null);
const tabs = {
  A,
  B,
};

interface DynamicComponentsProps {
  className?: string;
}

defineProps<DynamicComponentsProps>();

const handleClickBtn = (tab: string) => {
  currentTab.value = tab;
};
</script>
