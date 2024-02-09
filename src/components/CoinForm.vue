<template>
  <!-- <form @submit.prevent="submitNewCoin">
    <input type="text" placeholder="Enter coin name..." v-model="newCoinName" />
    <input type="text" placeholder="Enter coin amount..." v-model="newCoinAmount" />
    <button>Add Coin</button>
  </form> -->
  <form class="col-lg-5 add-coin-form" @submit.prevent="submitNewCoin">
    <div class="mb-3 mt-3">
      <label for="newCoinName" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="newCoinName"
        placeholder="Enter coin name..."
        v-model="newCoinName"
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
      />
    </div>
    <div class="d-grid gap-2">
      <button class="btn btn-primary">Add coin</button>
    </div>
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

<style>
.add-coin-form {
  margin: auto;
}
</style>
