<script>
import axios from 'axios'

export default {
  data() {
    return {
      cryptos: []
    }
  },
  methods: {
    async loadCryptos() {
      let response = await axios.get('https://api.coincap.io/v2/assets')
      let cryptos = response.data.data.map((crypto) => ({
        ...crypto,
        marketCapUsd: Number(crypto.marketCapUsd).toFixed(2),
        priceUsd: Number(crypto.priceUsd).toFixed(3)
      }))
      this.cryptos = cryptos
      console.log(cryptos)
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
        <table
          v-if="cryptos.length > 0"
          class="table table-striped table-light table-hover"
          style="max-width: 1000px"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Coin</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <!-- <tr>
              <th scope="row">1</th>
              <td>
                <img
                  class="crypto-icon"
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  alt=""
                />
                Bitcoin <span class="text-muted">BTC</span>
              </td>
              <td>$43,091,51</td>
              <td>$845,106,854,876</td>
            </tr> -->
            <tr v-for="(crypto, index) in cryptos" :key="index">
              <th scope="row">{{ crypto.rank }}</th>
              <td>
                <!-- <img class="crypto-icon" :src="crypto.image" alt="Crypto Image" /> -->
                {{ crypto.name }}
                <span class="text-muted">{{ crypto.symbol }}</span>
              </td>
              <td>${{ crypto.priceUsd }}</td>
              <td>${{ crypto.marketCapUsd }}</td>
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
}
</style>
