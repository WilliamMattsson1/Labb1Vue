<script>
import axios from 'axios'

export default {
  data() {
    return {
      cryptos: [],

      starImg0: 'src/assets/star0.png',
      starImg1: 'src/assets/star1.png'
    }
  },
  methods: {
    async loadCryptos() {
      let response = await axios.get('https://api.coincap.io/v2/assets')
      let cryptos = response.data.data.map((crypto) => ({
        ...crypto,
        marketCapUsd: Number(crypto.marketCapUsd).toFixed(2),
        priceUsd: Number(crypto.priceUsd).toFixed(3),

        isFavorite: false
      }))
      this.cryptos = cryptos
      console.log(cryptos)
    },
    changeStarImg(crypto) {
      crypto.isFavorite = !crypto.isFavorite
    }
  },
  created() {
    this.loadCryptos()
  }
}
</script>

<template>
  <div class="table-component">
    <h1 class="text-center">Discover <span class="blue-word">Top</span> Cryptos</h1>
    <div class="row justify-content-center">
      <div class="col-auto">
        <button @click="loadCryptos" class="btn btn-secondary">Refresh</button>
        <table v-if="cryptos.length > 0" class="table table-striped table-light table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Coin</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Favorite</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(crypto, index) in cryptos" :key="index">
              <th scope="row">{{ crypto.rank }}</th>
              <td>
                <!-- <img class="crypto-icon" :src="crypto.image" alt="Crypto Image" /> -->
                {{ crypto.name }}
                <span class="text-muted">{{ crypto.symbol }}</span>
              </td>
              <td>${{ crypto.priceUsd }}</td>
              <td>${{ crypto.marketCapUsd }}</td>
              <td>
                <img
                  @click="changeStarImg(crypto)"
                  class="favorite-star"
                  :src="crypto.isFavorite ? starImg1 : starImg0"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-component {
  margin-top: 18vh;
}

h1 {
  margin-bottom: 5vh;
}

.blue-word {
  color: #6106f3;
}

.crypto-icon {
  width: 30px;
}

table {
  border: 2px solid black;
  max-width: 1000px;
  min-width: 800px;
}

.favorite-star {
  width: 32px;
  cursor: pointer;
}
</style>
