<script setup>
import { RouterView } from "vue-router";

import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <nav class="sticky top-0 z-50">
    <NavBar />
  </nav>
  <main class="container mx-auto p-4">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
