<template>
  <div v-if="!searchError" class="container mt-4">
    <h2 class="text-center">{{ crypto.name }}</h2>
    <div class="row">
      <div class="crypto-info col-lg-5 col-12 bg-light p-4 mt-4">
        <div>
          <h3 class="blue-word">#{{ crypto.rank }} - {{ crypto.symbol }}</h3>
          <img :src="crypto.logo" alt="crypto icon" class="crypto-icon img-fluid" />
        </div>
        <p>Market cap: {{ formattedMarketCap }}</p>
        <p>Price: ${{ crypto.priceUsd }}</p>
        <p
          :class="{
            'text-danger': crypto.changePercent24Hr < 0,
            'text-success': crypto.changePercent24Hr >= 0
          }"
        >
          24h Change:
          <span class="fw-bold"
            >{{ crypto.changePercent24Hr }}%<i
              :class="{
                'bi bi-arrow-down': crypto.changePercent24Hr < 0,
                'bi bi-arrow-up': crypto.changePercent24Hr >= 0
              }"
            ></i>
          </span>
        </p>
        <router-link to="/" class="btn btn-primary"
          ><i class="bi bi-list-ul"></i> Back to List</router-link
        >
      </div>

      <div class="col-lg-7 col-12">
        <hr />

        <div class="general-info bg-light p-4 mt-4">
          <h4><i class="bi bi-info-circle"></i> General Crypto Information</h4>
          <p>
            Cryptocurrencies are digital or virtual currencies used as a medium of exchange. They
            are decentralized and rely on blockchain technology for security and transparency.
          </p>
          <p>
            Common cryptocurrencies include Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin
            (LTC), and many more.
          </p>

          <p>
            Investing in cryptocurrencies carries high risk and should be approached with caution.
            Conduct your own research and consult with financial experts before investing.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container mt-5 text-center">
    <h3>Couldn't find "{{ this.$route.params.id }}"...</h3>
    <p>Try again or search for some other coin</p>
    <div>
      <img src="../assets/searchError2.png" alt="search error" class="search-error-img" />
    </div>
    <RouterLink class="btn btn-primary mt-4" to="/"
      ><i class="bi bi-house-fill"></i> Home</RouterLink
    >
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      crypto: '',
      searchError: false
    }
  },
  async created() {
    this.getCryptoData()
    window.scrollTo({top: 0, left: 0})
  },
  methods: {
    async getCryptoData() {
      const cryptoId = this.$route.params.id

      try {
        const res = await axios.get(`https://api.coincap.io/v2/assets/${cryptoId}`)
        console.log(res.data.data)
        this.crypto = res.data.data
        this.crypto = {
          ...this.crypto,
          marketCapUsd: Number(this.crypto.marketCapUsd).toFixed(),
          priceUsd: Number(this.crypto.priceUsd).toFixed(2),
          logo: `https://assets.coincap.io/assets/icons/${this.crypto.symbol.toLowerCase()}@2x.png`,
          changePercent24Hr: Number(this.crypto.changePercent24Hr).toFixed(2)
        }
        this.searchError = false
        console.log(this.crypto)
      } catch (error) {
        console.error('Error fetching data', error)
        this.searchError = true
      }
    }
  },
  computed: {
    formattedMarketCap() {
      if (this.crypto.marketCapUsd >= 1e12) {
        return (this.crypto.marketCapUsd / 1e12).toFixed(3) + 'T'
      } else if (this.crypto.marketCapUsd >= 1e9) {
        return (this.crypto.marketCapUsd / 1e9).toFixed(2) + 'B'
      } else {
        return (this.crypto.marketCapUsd / 1e6).toFixed(1) + 'M'
      }
    }
  },
  watch: {
    '$route.params.id': {
      handler: 'getCryptoData'
    }
  }
}
</script>

<style scoped>
.crypto-icon {
  width: 60px;
  margin: 9px;
}

.crypto-info {
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: fit-content;
  margin: auto;
}

.general-info {
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: fit-content;
}

.container {
  margin-bottom: 8rem;
}

.search-error-img {
  width: 240px;
}

hr {
  display: none;
}

@media (max-width: 1000px) {
  .crypto-info {
    width: 94%;
  }

  hr {
    display: block;
  }
}
</style>
