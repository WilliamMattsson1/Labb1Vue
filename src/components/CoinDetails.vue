<template>
  <div class="d-flex justify-content-between">
    <h5>{{ coin.title }} - {{ coin.amount }}kr</h5>
    <div>
      <p class="badge bg-primary rounded-pill">{{ getPercentage }}%</p>
      <i class="material-icons">close</i>
    </div>
  </div>
</template>

<script>
import { usePortfolioStore } from '../stores/portfolioStore.js'

export default {
  props: {
    coin: {
      type: Object
    }
  },
  data() {
    return {
      percentage: ''
    }
  },
  computed: {
    getPercentage() {
      const totalAmount = this.portfolioStore.totalAmount
      return ((this.coin.amount / totalAmount) * 100).toFixed(1)
    }
  },
  setup() {
    const portfolioStore = usePortfolioStore()

    return { portfolioStore }
  }
}
</script>

<style></style>
