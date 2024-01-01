<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;1,200;1,500;1,600&display=swap");

header {
  max-height: 10vh;
  width: 100%;
}

</style>
