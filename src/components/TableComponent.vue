p
<script setup>
import axios from 'axios'
import PopupComponent from './PopupComponent.vue'
</script>

<script>
export default {
  components: {
    PopupComponent
  },
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
      try {
        let response = await axios.get('https://api.coincap.io/v2/assets')
        let cryptos = response.data.data.map((crypto) => ({
          ...crypto,
          marketCapUsd: Number(crypto.marketCapUsd).toFixed(),
          priceUsd: Number(crypto.priceUsd).toFixed(2),
          isFavorite: false,
          logo: `https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`
        }))
        this.cryptos = cryptos
        console.log(cryptos)
        this.findFavorites()
      } catch (error) {
        console.error('Error loading cryptos', error)
      }
    },
    /* Kollar på favorites som är sparade i localstorage och gör isFavorite = true */
    findFavorites() {
      for (let i = 0; i < localStorage.length; i++) {
        const cryptoName = localStorage.key(i)
        const crypto = this.cryptos.find((crypto) => crypto.name === cryptoName)
        crypto.isFavorite = true
      }
      console.log('Ändrade om dom till true')
    },
    /* Byter bilden */
    /* changeStarImg(crypto) {
      crypto.isFavorite = !crypto.isFavorite

      if (crypto.isFavorite) {
        localStorage.setItem(`${crypto.name}`, true)
      } else {
        localStorage.removeItem(`${crypto.name}`)
      }
    } */
    changeIsFavorite(crypto) {
      crypto.isFavorite = !crypto.isFavorite

      if (crypto.isFavorite) {
        localStorage.setItem(`${crypto.name}`, true)
      } else {
        localStorage.removeItem(`${crypto.name}`)
      }
    },
    showFavoritesPopup() {
      this.isFavoritesPopupVisible = true
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
          if (crypto.marketCapUsd >= 1e12) {
            crypto.marketCapUsdFormatted = (crypto.marketCapUsd / 1e12).toFixed(3) + 'T'
          } else if (crypto.marketCapUsd >= 1e9) {
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
    <h1 class="text-center">Explore the <span class="blue-word">Top</span> 100 Cryptos</h1>
    <div class="row justify-content-center">
      <div class="col-auto">
        <div class="d-flex align-items-center">
          <button @click="loadCryptos" class="btn btn-secondary m1-1">
            Refresh <i class="bi bi-arrow-clockwise"></i>
          </button>

          <div>
            <button
              @click="showFavoritesPopup"
              class="btn btn-primary m-1"
              v-if="favoriteCryptos.length > 0"
            >
              Show Favorites <i class="bi bi-star"></i>
            </button>
            <span class="favorite-cryptos-length" v-if="favoriteCryptos.length > 0">{{
              favoriteCryptos.length
            }}</span>
          </div>
        </div>

        <table
          v-if="cryptos.length > 0"
          class="desktop-table table table-striped table-light table-hover"
        >
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
                <!-- <img
                  @click="changeStarImg(crypto)"
                  class="favorite-star"
                  :src="crypto.isFavorite ? starImg1 : starImg0"
                /> -->
                <h5
                  class="heart-icon"
                  :class="{
                    'bi bi-heart': !crypto.isFavorite,
                    'bi bi-heart-fill': crypto.isFavorite
                  }"
                  @click="changeIsFavorite(crypto)"
                ></h5>
                <!-- <span v-if="crypto.isFavorite" class="seeAllFav" @click="showFavoritesPopup"
                  >Show favorites</span
                > -->
              </td>
            </tr>
          </tbody>
        </table>

        <table
          v-if="cryptos.length > 0"
          class="mobile-table table table-striped table-light table-hover table-responsive"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Coin</th>
              <th scope="col">Price</th>
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
                <RouterLink :to="`/${crypto.id}`" class="read-more-link"
                  ><br />Read more</RouterLink
                >
              </td>
              <td>${{ crypto.priceUsd }}</td>
              <td>
                <h5
                  class="heart-icon"
                  :class="{
                    'bi bi-heart': !crypto.isFavorite,
                    'bi bi-heart-fill': crypto.isFavorite
                  }"
                  @click="changeIsFavorite(crypto)"
                ></h5>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-else>
          <div class="d-flex justify-content-center mt-3">
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PopupComponent
    :favoriteCryptos="favoriteCryptos"
    :isFavoritesPopupVisible="isFavoritesPopupVisible"
    @close-popup="isFavoritesPopupVisible = $event"
  />
</template>

<style>
.table-component {
  margin-top: 10vh;
  overflow-x: hidden;
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
}

.desktop-table {
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

.heart-icon {
  color: #ff914d;
  cursor: pointer;
  padding-top: 0.8rem;
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

.mobile-table {
  display: none;
}

.favorite-cryptos-length {
  background-color: #ff914d;
  border-radius: 10px;
  padding: 4px 8px;
  margin-left: 5px;
  position: relative;
  bottom: 14px;
  right: 20px;
  color: white;
}

td {
  vertical-align: middle;
}

@media (max-width: 1000px) {
  .mobile-table {
    display: block;
  }
  .desktop-table {
    display: none;
  }

  .favorites-popup {
    width: 100%;
    border-radius: 0;
  }

  .heart-icon {
    padding: 1rem;
  }
}
</style>
