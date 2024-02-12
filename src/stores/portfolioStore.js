import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolioStore', {
  state: () => ({
    coins: [
      { id: 1, title: 'Bitcoin', amount: 3000 },
      { id: 2, title: 'Ethereum', amount: 3000 },
      { id: 3, title: 'Solana', amount: 3000 }
    ],
    name: 'William'
  }),
  getters: {
    totalAmount(state) {
      return state.coins.reduce((total, coin) => total + coin.amount, 0)
    }
  },
  actions: {
    addCoin(coin) {
      this.coins.push(coin)
      console.log(coin)
    },
    deleteCoin(coinId) {
      this.coins = this.coins.filter((coin) => {
        return coin.id !== coinId
      })
    }
  }
})
