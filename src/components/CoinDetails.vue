<template>
  <div class="d-flex justify-content-between coin-container border-bottom">
    <h6>{{ coin.title }} - ${{ coin.amount }}</h6>
    <div>
      <p class="badge bg-secondary rounded-pill allocation mt-2">{{ getPercentage }}%</p>
      <i class="bi bi-x-lg p-1" @click="portfolioStore.deleteCoin(coin.id)"></i>
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
      return ((this.coin.amount / totalAmount) * 100).toFixed()
    }
  },
  setup() {
    const portfolioStore = usePortfolioStore()

    return { portfolioStore }
  }
}
</script>

<style>
h6 {
  font-size: 18px;
}

.coin-container {
  align-items: center;
}

.allocation {
  font-size: 16px;
}

i {
  cursor: pointer;
}
</style>
