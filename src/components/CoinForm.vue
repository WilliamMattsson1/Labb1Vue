<template>
  <form @submit.prevent="submitNewCoin">
    <input type="text" placeholder="Enter coin name..." v-model="newCoinName" />
    <input type="text" placeholder="Enter coin amount..." v-model="newCoinAmount" />
    <button>Add Coin</button>
  </form>
</template>

<script>
import { usePortfolioStore } from '../stores/portfolioStore'

export default {
  setup() {
    const portfolioStore = usePortfolioStore()

    return { portfolioStore }
  },
  methods: {
    submitNewCoin() {
      console.log(this.newCoinName, this.newCoinAmount)
      if (this.newCoinAmount > 0) {
        this.portfolioStore.addCoin({
          title: this.newCoinName,
          amount: Number(this.newCoinAmount),
          id: Math.floor(Math.random() * 10000)
        })
        this.newCoinName = ''
        this.newCoinAmount = ''
      }
    }
  },
  data() {
    return {
      newCoinName: '',
      newCoinAmount: null
    }
  }
}
</script>
