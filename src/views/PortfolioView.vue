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
  <h1>Portfolio View - {{ portfolioStore.name }}</h1>

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
      </ul>
    </div>
  </div>
</template>

<style>
.portfolio-container {
  width: 500px;
  border: 2px black solid;
  border-radius: 8px;
}

.show-portfolio {
  margin: auto;
}
</style>
