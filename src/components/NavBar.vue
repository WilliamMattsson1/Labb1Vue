<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Portfolio', url: '/portfolio' },
        { text: 'Learn', url: '/learn' }
      ]
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent border-bottom">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/"
          ><img src="../assets/LogoCC.png" width="70px" alt="logo"
        /></RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="(link, index) in links" class="nav-item" :key="index">
              <RouterLink class="nav-link active" aria-current="page" :to="link.url">
                {{ link.text }}</RouterLink
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search coins"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style></style>
