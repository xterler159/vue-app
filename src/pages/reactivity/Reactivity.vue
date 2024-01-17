<template>
  <h1 class="text-center">Reactivity</h1>
  <input placeholder="What is your question ?" v-model="question" />
  <p>Answer: {{ answer }}</p>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const defaultAnswer = "Questions usually contain a question mark. ;-)";

const question = ref("");
const answer = ref(defaultAnswer);
const loading = ref<boolean>(false);

watch(question, async (currentValue, oldValue) => {
  // console.log("watch question value:", currentValue);
  // console.log("watch question oldValue:", oldValue);
  // console.log("\n");

  if (answer.value !== "") {
    answer.value = defaultAnswer;
  }

  if (currentValue.includes("?")) {
    loading.value = true;
    answer.value = "Thinking...";

    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
    } catch (err) {
      console.error("error while fetching data:", err);
    } finally {
      loading.value = false;
    }
  }
});

watch(loading, () => {
  console.log("watch loading:", loading);
});
</script>
