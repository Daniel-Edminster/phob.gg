<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import Resources from './views/Resources.vue';

import Releases from './views/Releases.vue';
</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  
  <!-- <Home /> -->

  <router-view />
    <Navbar />
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */

    /* @apply bg-stone-900 text-zinc-50; */
   /* */ 
   /* @apply text-zinc-50; */
  background-color: #36393f;
  @apply h-screen w-screen text-zinc-50;
  max-width: 100%;

}

body {
  background-color: #36393f;
}
</style>
