<script>
import CoinDetails from '../components/CoinDetails.vue'
import { usePortfolioStore } from '../stores/portfolioStore.js'
import CoinForm from '../components/CoinForm.vue'

export default {
  components: { CoinDetails, CoinForm },
  setup() {
    const portfolioStore = usePortfolioStore()

    return { portfolioStore }
  }
}
</script>
<template>
  <div class="container text-center mt-4">
    <h2 class="">Welcome to your <span class="blue-word">portfolio</span> overview</h2>
    <p class="text-under-h2">Create and manage your own portfolio</p>
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
        <li
          class="list-group-item list-group-item-action"
          v-for="(coin, index) in portfolioStore.coins"
          :key="index"
        >
          <CoinDetails :coin="coin" />
        </li>
        <div>
          <h5 class="p-2 total-amount">
            <span class="total-amount">Portfolio value:</span>
            <span class="blue-word">${{ this.portfolioStore.totalAmount }}</span>
          </h5>
        </div>
      </ul>
    </div>
  </div>
  <div>
    <CoinForm />
  </div>
</template>

<style>
.portfolio-container {
  width: 360px;
  border: 2px rgba(0, 0, 0, 0.4) solid;
  border-radius: 20px;
}

.text-under-h2 {
  font-size: 20px;
  font-weight: 400;
}

.show-portfolio {
  margin-left: 1rem;
}

.total-amount {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-amount p {
  font-weight: 500;
}
</style>
