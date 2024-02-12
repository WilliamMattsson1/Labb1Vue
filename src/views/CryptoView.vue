<template>
  <div class="container mt-4">
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
          24h Change: {{ crypto.changePercent24Hr }}%
        </p>
        <router-link to="/" class="btn btn-primary">Back to List</router-link>
      </div>
      <div class="col-lg-7 col-12">
        <div class="crypto-info general-info bg-light p-4 mt-4">
          <h4>General Crypto Information</h4>
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
    this.getCryptoData()
  },
  methods: {
    async getCryptoData() {
      const cryptoId = this.$route.params.id
      const res = await axios.get(`https://api.coincap.io/v2/assets/${cryptoId}`)
      console.log(res.data.data)
      this.crypto = res.data.data
      this.crypto = {
        ...this.crypto,
        marketCapUsd: Number(this.crypto.marketCapUsd).toFixed(),
        priceUsd: Number(this.crypto.priceUsd).toFixed(3),
        logo: `https://assets.coincap.io/assets/icons/${this.crypto.symbol.toLowerCase()}@2x.png`,
        changePercent24Hr: Number(this.crypto.changePercent24Hr).toFixed(2)
      }
      console.log(this.crypto)
    }
  },
  computed: {
    formattedMarketCap() {
      if (this.crypto.marketCapUsd >= 1e9) {
        return (this.crypto.marketCapUsd / 1e9).toFixed(2) + 'B'
      } else {
        return (this.crypto.marketCapUsd / 1e6).toFixed(1) + 'M'
      }
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
}

.container {
  margin-bottom: 8rem;
}
</style>
