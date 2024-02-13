<template>
  <div v-if="isFavoritesPopupVisible" class="popup-background">
    <div v-if="isFavoritesPopupVisible" class="favorites-popup text-center text-lg-start">
      <h3><i class="bi bi-star-fill"></i> Your Favorites</h3>
      <ol>
        <li v-for="(favoriteCrypto, index) in favoriteCryptos" :key="index">
          {{ favoriteCrypto.name }} - {{ favoriteCrypto.symbol }}
        </li>
      </ol>
      <button @click="closeFavoritesPopup" class="btn btn-secondary">
        <i class="bi bi-x-lg"></i> Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favoriteCryptos: Array,
    isFavoritesPopupVisible: Boolean
  },
  emits: ['close-popup'],
  methods: {
    closeFavoritesPopup() {
      console.log('Stänger popupen')
      this.$emit('close-popup', false)
    }
  }
}
</script>

<style scoped></style>
