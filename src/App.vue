<script setup lang="ts">
import HelloOptionsAPI from "./components/HelloOptionsAPI.vue";
import HelloCompositionAPI from "./components/HelloCompositionAPI.vue";
import Counter from "./components/Counter.vue";
import Slots from "./components/Slots.vue";
import Form from "./components/Form.vue";

const rawHtml = "<span style='color: red'>this is a span</span>";
</script>

<template style="display: none">
  <div class="app-container container-fluid">
    <HelloOptionsAPI welcome-msg="hello !!" />
    <HelloCompositionAPI welcome-msg="hey man" />
    <Counter />

    <div>
      <p>raw html demo, using text interpolation: {{ rawHtml }}</p>
      <p>
        raw html demo, using v-html directive: <span v-html="rawHtml"></span>
      </p>
    </div>

    <Slots> Within a slot </Slots>
    <Slots>
      <Counter />
    </Slots>
    <Form />
  </div>
</template>
