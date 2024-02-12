<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <a href="#" class="navbar-brand">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/home" class="nav-link" aria-current="page">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/composition-api" class="nav-link" aria-current="page">
            Composition API
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/options-api" class="nav-link" aria-current="page">
            Options API
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/users" class="nav-link" aria-current="page">Users</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/dynamic-components-vue" class="nav-link" aria-current="page">
            Dynamic Components
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/reactivity" class="nav-link" aria-current="page">
            Reactivity Components
          </router-link>
        </li>
      </ul>

      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" @click="handleDropDown">
          Click me!
        </button>

        <ul :class="`dropdown-menu ${isActiveDropDown ? 'show' : ''}`">
          <li class="dropdown-item">
            <router-link to="/watchers" class="nav-link" aria-current="page">Watchers</router-link>
          </li>

          <li class="dropdown-item">
            <router-link to="/computed" class="nav-link" aria-current="page">Computed</router-link>
          </li>

          <li class="dropdown-item">
            <router-link to="/slots" class="nav-link" aria-current="page">Slots</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <pre>{{ activeClass }}</pre>
  <pre>{{ isActiveDropDown }}</pre>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

const isActiveDropDown = ref(false);

const handleDropDown = () => (isActiveDropDown.value = !isActiveDropDown.value);

const activeClass = computed(() => {
  return isActiveDropDown.value ? "show" : "not-show";
});
</script>
