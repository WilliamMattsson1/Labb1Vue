<template>
  <h1>{{ crypto.name }}</h1>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      crypto: ''
    }
  },
  async created() {
    const cryptoId = this.$route.params.id
    const res = await axios.get(`https://api.coincap.io/v2/assets/${cryptoId}`)
    this.crypto = res.data.data
    console.log(this.crypto)
  }
}
</script>

<style scoped></style>
