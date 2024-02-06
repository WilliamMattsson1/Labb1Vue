<script>
import axios from 'axios'

export default {
  data() {
    return {
      cryptos: [],
      starImg0: 'src/assets/star0.png',
      starImg1: 'src/assets/star1.png',
      isFavoritesPopupVisible: false
    }
  },
  methods: {
    /* Laddar in alla cryptos, tar bort decimaler, lägger till isFavorite egenskapen */
    async loadCryptos() {
      let response = await axios.get('https://api.coincap.io/v2/assets')
      let cryptos = response.data.data.map((crypto) => ({
        ...crypto,
        marketCapUsd: Number(crypto.marketCapUsd).toFixed(),
        priceUsd: Number(crypto.priceUsd).toFixed(3),
        isFavorite: false,
        logo: `https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`
      }))
      this.cryptos = cryptos
      console.log(cryptos)
    },
    /* Byter bilden */
    changeStarImg(crypto) {
      crypto.isFavorite = !crypto.isFavorite
    },
    showFavoritesPopup() {
      this.isFavoritesPopupVisible = true
    },
    closeFavoritesPopup() {
      this.isFavoritesPopupVisible = false
    }
  },
  created() {
    this.loadCryptos()
  },
  computed: {
    favoriteCryptos() {
      return this.cryptos.filter((crypto) => crypto.isFavorite)
    }
  },

  watch: {
    cryptos: {
      handler(allCryptos) {
        allCryptos.forEach((crypto) => {
          if (crypto.marketCapUsd >= 1e9) {
            crypto.marketCapUsdFormatted = (crypto.marketCapUsd / 1e9).toFixed(2) + 'B'
          } else {
            crypto.marketCapUsdFormatted = (crypto.marketCapUsd / 1e6).toFixed(1) + 'M'
          }
        })
      },
      deep: true
    }
  }
}
</script>

<template>
  <div class="table-component">
    <h1 class="text-center">Discover <span class="blue-word">Top</span> 100 Cryptos</h1>
    <div class="row justify-content-center">
      <div class="col-auto">
        <button @click="loadCryptos" class="btn btn-secondary m1-1">Refresh</button>
        <button
          @click="showFavoritesPopup"
          class="btn btn-primary m-1"
          v-if="favoriteCryptos.length > 0"
        >
          Show All Favorites
        </button>

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
                <img :src="crypto.logo" alt="symbol" style="width: 32px" />
                {{ crypto.name }}
                <span class="text-muted">{{ crypto.symbol }}</span>
                <RouterLink :to="`/${crypto.id}`" class="read-more-link">Read more</RouterLink>
              </td>
              <td>${{ crypto.priceUsd }}</td>
              <td>${{ crypto.marketCapUsdFormatted }}</td>
              <td>
                <img
                  @click="changeStarImg(crypto)"
                  class="favorite-star"
                  :src="crypto.isFavorite ? starImg1 : starImg0"
                />
                <span v-if="crypto.isFavorite" class="seeAllFav" @click="showFavoritesPopup"
                  >Show favorites</span
                >
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <div class="d-flex justify-content-center mt-2">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading.....</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Popup -->
  <div v-if="isFavoritesPopupVisible" class="popup-background"></div>
  <div v-if="isFavoritesPopupVisible" class="favorites-popup">
    <h3>Your Favorites</h3>
    <ol>
      <li v-for="(crypto, index) in favoriteCryptos" :key="index">
        {{ crypto.name }} - {{ crypto.symbol }}
      </li>
    </ol>
    <button @click="closeFavoritesPopup" class="btn btn-secondary">Close</button>
  </div>
</template>

<style scoped>
.table-component {
  margin-top: 10vh;
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

.seeAllFav {
  font-size: 11px;
  cursor: pointer;
  font-weight: 700;
  color: #6106f3;
  margin-left: 2px;
}

.favorites-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.6rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.read-more-link {
  text-decoration: none;
  padding-left: 6px;
  font-weight: 500;
}
</style>
