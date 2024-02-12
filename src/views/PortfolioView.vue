<script>
import CoinDetails from '../components/CoinDetails.vue'
import { usePortfolioStore } from '../stores/portfolioStore.js'
import CoinForm from '../components/CoinForm.vue'

import PortfolioChart from '../components/PortfolioChart.vue'

export default {
  components: { CoinDetails, CoinForm, PortfolioChart },
  setup() {
    const portfolioStore = usePortfolioStore()

    return { portfolioStore }
  }
}
</script>
<template>
  <div class="container text-center mt-2">
    <h2 class="">Welcome to your <span class="blue-word">portfolio</span> overview</h2>
    <p class="text-under-h2">Create and manage your own portfolio</p>
  </div>

  <div class="container-lg text-center mt-2 justify-content-center align.items-center">
    <div class="row">
      <div class="col-lg-7 col-md-12 mt-4 form-container">
        <CoinForm />
      </div>

      <div class="col-lg-5 col-md-12">
        <div class="show-portfolio mt-4">
          <div class="container portfolio-container">
            <div v-for="(coin, index) in portfolioStore.coins" :key="index">
              <CoinDetails :coin="coin" />
            </div>
            <div>
              <h5 class="pt-3 total-amount">
                <span class="total-amount">Portfolio value:</span>
                <span class="blue-word">${{ this.portfolioStore.totalAmount }}</span>
              </h5>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-2">
          <PortfolioChart />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.portfolio-container {
  width: 360px;
  border: 2px white solid;
  border-radius: 20px;
  padding: 1rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.text-under-h2 {
  font-size: 20px;
  font-weight: 400;
}

.total-amount {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-amount p {
  font-weight: 500;
}

.form-container {
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 2rem;
  height: fit-content;
}

.form-container input {
  background-color: #f0ebf7;
}
</style>
