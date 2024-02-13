<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Home', url: '/' },
        { text: 'Portfolio', url: '/portfolio' },
        { text: 'Learn', url: '/learn' }
      ],
      searchTerm: '',
      currentPage: ''
    }
  },
  methods: {
    resetForm() {
      this.searchTerm = ''
    },
    setCurrentPage(page) {
      this.currentPage = page
    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary border-bottom">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/"
          ><img src="../assets/LogoCC.png" width="50px" alt="logo"
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
              <RouterLink
                :class="{ active: currentPage === link }"
                class="nav-link"
                aria-current="page"
                :to="link.url"
                @click="setCurrentPage(link)"
              >
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
              v-model="searchTerm"
            />
            <RouterLink
              :to="`/${searchTerm.toLowerCase()}`"
              class="btn btn-secondary"
              @click="resetForm"
              >Search</RouterLink
            >
          </form>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style></style>
