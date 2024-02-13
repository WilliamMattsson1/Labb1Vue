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
    <h2 class="mt-4">Welcome to your <span class="blue-word">portfolio</span> overview</h2>
    <p class="text-under-h2">Create and manage your own portfolio</p>
  </div>

  <div class="container-lg text-center mt-2 justify-content-center align-items-center">
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
      </div>
    </div>

    <hr />

    <div class="row mt-4 justify-content-center">
      <h5>
        Dive deep into your portfolio with <br />
        <span class="blue-word">advanced analysis tools</span>
      </h5>
      <div class="col-lg-6 col-md-12">
        <div class="card col-12">
          <img
            src="https://images.unsplash.com/photo-1613442368680-a30262ad8b3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top"
            alt="Trading image"
          />
          <div class="card-body">
            <h6 class="card-title">CC Pro 30% Off</h6>
            <p class="card-text">Get CC Pro right now to get access to 40+ analysis tools!</p>
            <a href="/" class="btn btn-primary disabled">Get Pro Now</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div v-if="portfolioStore.coins.length > 0">
          <PortfolioChart />
        </div>
        <div v-else>
          <div class="card col-12">
            <img
              src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="card-img-top"
              alt="Analytics"
            />
            <div class="card-body">
              <h6 class="card-title"></h6>
              <p class="card-text">
                Add assets to your portfolio to view analytics of your whole portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.portfolio-container {
  min-width: 348px;
  border: 2px white solid;
  border-radius: 20px;
  padding: 0.8rem;
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
  padding: 0.8rem;
  height: fit-content;
}

.form-container input {
  background-color: #f0ebf7;
}

hr {
  width: 92%;
  margin: 3rem auto;
  border-bottom: 5px solid black;

  background-color: black;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
}

.card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: none;
}

@media (max-width: 1000px) {
  .form-container {
    margin: auto;
    width: 92%;
  }
}
</style>
