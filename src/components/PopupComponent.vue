<template>
  <div v-if="isFavoritesPopupVisible" class="popup-background"></div>
  <div v-if="isFavoritesPopupVisible" class="favorites-popup">
    <h3>Your Favorites</h3>
    <ol>
      <li v-for="(favoriteCrypto, index) in favoriteCryptos" :key="index">
        {{ favoriteCrypto.name }} - {{ favoriteCrypto.symbol }}
      </li>
    </ol>
    <button @click="closeFavoritesPopup" class="btn btn-secondary">Close</button>
  </div>
</template>

<script>
export default {
  props: ['favoriteCryptos', 'isFavoritesPopupVisible'],
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
