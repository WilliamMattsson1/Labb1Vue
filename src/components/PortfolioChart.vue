<template>
  <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { usePortfolioStore } from '../stores/portfolioStore.js'

import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'PieChart',

  extends: Pie,

  components: { Pie },

  setup() {
    const portfolioStore = usePortfolioStore()

    return { portfolioStore }
  },

  props: {
    data: {
      type: Object
    }
  },

  computed: {
    chartData() {
      const coins = this.portfolioStore.coins
      return {
        labels: coins.map((coin) => coin.title),
        datasets: [
          {
            label: 'Dollar value',
            data: coins.map((coin) => coin.amount),
            backgroundColor: this.getRandomColors(coins.length)
          }
        ]
      }
    }
  },

  data() {
    return {
      chartOptions: {
        responsive: true
      }
    }
  },

  methods: {
    getRandomColors(count) {
      const letters = '0123456789ABCDEF'
      const colors = []
      for (let i = 0; i < count; i++) {
        let color = '#'
        for (let j = 0; j < 6; j++) {
          color += letters[Math.floor(Math.random() * 16)]
        }
        colors.push(color)
      }
      return colors
    }
  }
}
</script>
