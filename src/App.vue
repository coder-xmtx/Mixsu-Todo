<script setup>
import { RouterView } from "vue-router";

import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <nav>
    <NavBar />
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
