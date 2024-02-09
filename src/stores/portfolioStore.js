/* Default */
/* import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}) */

import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolioStore', {
  state: () => ({
    coins: [
      { id: 1, title: 'Bitcoin', amount: 3000 },
      { id: 2, title: 'Ethereum', amount: 2000 },
      { id: 3, title: 'Solana', amount: 12300 }
    ],
    name: 'William'
  }),
  getters: {
    totalAmount(state) {
      return state.coins.reduce((total, coin) => total + coin.amount, 0)
    }
  }
})
