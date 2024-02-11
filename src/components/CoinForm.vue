<template>
  <h5>Add assets to your portfolio</h5>
  <form class="add-coin-form" @submit.prevent="submitNewCoin">
    <div class="mb-3 mt-3">
      <label for="newCoinName" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="newCoinName"
        placeholder="Enter coin name..."
        v-model="newCoinName"
        required
      />
    </div>
    <div class="mb-3">
      <label for="newCoinAmount" class="form-label">Amount</label>
      <input
        type="text"
        class="form-control"
        id="newCoinAmount"
        placeholder="Enter dollar amount..."
        v-model="newCoinAmount"
        required
      />
    </div>
    <div class="d-grid gap-2">
      <button class="btn btn-primary">Add coin</button>
    </div>
  </form>
</template>

<script>
import { usePortfolioStore } from '../stores/portfolioStore'
import { v4 as uuidv4 } from 'uuid'

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
          id: uuidv4()
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

<style></style>
