<script setup>
/* import { RouterLink, RouterView } from 'vue-router'
 *//* import HelloWorld from './components/HelloWorld.vue'
 */
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <!-- Navbar -->
  <NavBar />

  <!-- Footer -->
  <FooterComponent />
  <!-- För att de ska synas på alla sidor -->

  <!-- <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header> -->
</template>

<style scoped></style>
