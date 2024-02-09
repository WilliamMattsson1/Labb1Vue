<script>
import CoinDetails from '../components/CoinDetails.vue'
import { usePortfolioStore } from '../stores/portfolioStore.js'

export default {
  components: { CoinDetails },
  setup() {
    const portfolioStore = usePortfolioStore()

    return { portfolioStore }
  }
}
</script>
<template>
  <div class="container text-center m-4">
    <h2 class="text-center">Welcome to your <span class="blue-word">portfolio</span> overview</h2>
    <p class="text-center text-under-h2">Create and manage your own portfolio</p>
  </div>

  <div class="show-portfolio">
    <p class="d-inline-flex gap-1">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Show portfolio
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <ul class="list-group portfolio-container">
        <li class="list-group-item" v-for="(coin, index) in portfolioStore.coins" :key="index">
          <CoinDetails :coin="coin" />
        </li>
        <h5 class="p-3">Portfolio value: {{ this.portfolioStore.totalAmount }}kr</h5>
      </ul>
    </div>
  </div>
</template>

<style>
.portfolio-container {
  width: 400px;
  border: 2px black solid;
  border-radius: 8px;
}

.text-under-h2 {
  font-size: 20px;
  font-weight: 400;
}

/* .show-portfolio {
} */
</style>
