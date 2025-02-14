<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigacija from './components/Navigacija.vue';
</script>

<template>
  <Navigacija />
  <br>
  <RouterView class="container" />
</template>

<style scoped>

</style>
