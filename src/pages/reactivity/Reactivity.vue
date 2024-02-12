<template>
  <h1 class="text-center">Reactivity</h1>
  <input placeholder="What is your question ?" v-model="question" />
  <Answer :answer="answerResponse" />
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

import Answer from "@/pages/reactivity/Answer.vue";

const defaultAnswer = "Questions usually contain a question mark. ;-)";

const question = ref("");
const answerResponse = ref(defaultAnswer);
const loading = ref<boolean>(false);

watch(question, async (currentValue) => {
  if (answerResponse.value !== "") {
    answerResponse.value = defaultAnswer;
  }

  if (currentValue.includes("?")) {
    loading.value = true;
    answerResponse.value = "Thinking...";

    try {
      const res = await fetch("https://yesno.wtf/api");
      answerResponse.value = (await res.json()).answer;
    } catch (err) {
      console.error("error while fetching data:", err);
    } finally {
      loading.value = false;
    }
  }
});
</script>
