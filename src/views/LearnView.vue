<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4 blue-word p4">Learn & Earn</h1>
    <div class="row">
      <div class="col-lg-3 col-12">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            :class="{ active: currentCategory === category }"
            v-for="(category, index) in categories"
            :key="index"
            @click="setCurrentCategory(category)"
          >
            {{ category }}
          </a>
        </div>
      </div>
      <div class="col-lg-9 col-12 pt-4">
        <div v-if="currentCategory === 'Cryptocurrencies'">
          <h2 class="text-md-start text-center">
            <i class="bi bi-currency-bitcoin"></i>Cryptocurrencies
          </h2>
          <p class="learn-text">
            Cryptocurrencies, secured by special codes, are digital assets not governed by any
            authority. Stored on blockchains, they're easily transferred. Bitcoin, the pioneer,
            paved the way for others like Ethereum and Litecoin. While offering quick, low-cost
            transactions and some privacy, they pose risks due to volatile values and susceptibility
            to theft.
          </p>
          <h5>Bitcoin</h5>
          <p class="learn-text">
            Bitcoin started in 2009 by someone named Satoshi Nakamoto. It's like digital money but
            without a bank. Instead of one person controlling it, lots of people keep track of it
            using computers. There will only ever be 21 million Bitcoins. Some people think of it
            like online gold because it's rare and valuable. At first, many people didn't trust it,
            but now it's getting more popular. Bitcoin showed up during a big money problem, and it
            changed how we think about money.
          </p>
          <h5>Ethereum</h5>
          <p class="learn-text">
            Ethereum, introduced in 2015 by Vitalik Buterin, is a decentralized platform enabling
            smart contracts and decentralized applications (DApps) to be built and operated without
            any downtime, fraud, control, or interference from a third party. Similar to Bitcoin,
            Ethereum operates on a blockchain network, but its focus extends beyond digital
            currency. Ether (ETH) is Ethereum's native cryptocurrency, used to facilitate
            transactions on the network. The Ethereum community is highly active, continuously
            developing innovative solutions and applications across various industries.
          </p>
        </div>
        <div v-else-if="currentCategory === 'Wallets'">
          <h2 class="text-md-start text-center"><i class="bi bi-wallet2"></i> Wallets</h2>
          <p class="learn-text">
            Crypto wallets, like physical wallets for cash, securely store digital coins such as
            Bitcoin or Ethereum. They come in two types: software wallets on devices and hardware
            wallets as physical devices. Each wallet has a public address for receiving coins and a
            private key for access, which must be safeguarded. While they provide control over
            funds, ensuring their safety is paramount.
          </p>
          <h5>Hardware wallets</h5>
          <p class="learn-text">
            Hardware wallets are specialized devices designed to securely store your cryptocurrency
            offline, away from internet threats. They act as a digital safe for your digital assets,
            providing peace of mind knowing that your funds are protected from cyberattacks.
          </p>
          <h5>Software wallets</h5>
          <p class="learn-text">
            Software wallets are digital applications or programs that store your cryptocurrency
            securely on your computer or mobile device. They offer convenient access to your funds
            for everyday transactions while providing protection against unauthorized access.
          </p>
        </div>
        <div v-else-if="currentCategory === 'Blockchain'">
          <h2 class="text-md-start text-center"><i class="bi bi-wifi"></i> Blockchain</h2>
          <p class="learn-text">
            Blockchain is a decentralized, distributed ledger technology that records transactions
            across multiple computers in a secure, transparent, and tamper-resistant manner. Each
            block in the chain contains a cryptographic hash of the previous block, timestamp, and
            transaction data, creating a chronological and immutable record. Blockchain technology
            underpins cryptocurrencies like Bitcoin and Ethereum, but its applications extend beyond
            digital currencies. It has the potential to revolutionize various industries, including
            finance, supply chain, healthcare, and more.
          </p>
          <h5>Decentralization</h5>
          <p class="learn-text">
            One of the key features of blockchain is decentralization, meaning there's no central
            authority controlling the network. Instead, transactions are verified and recorded by a
            network of computers (nodes) spread globally. This decentralization ensures
            transparency, security, and resilience against single points of failure.
          </p>
          <h5>Smart Contracts</h5>
          <p class="learn-text">
            Smart contracts are self-executing contracts with the terms of the agreement directly
            written into code. They automatically execute and enforce agreements when predefined
            conditions are met. Ethereum introduced smart contracts to blockchain technology,
            enabling the development of decentralized applications (DApps) and programmable digital
            assets beyond simple monetary transactions.
          </p>
        </div>
        <div v-else-if="currentCategory === 'Trading'" class="p-2">
          <h2 class="text-md-start text-center">
            <i class="bi bi-piggy-bank"></i>Trading & investing
          </h2>
          <p class="learn-text">
            Trading and investing are two common ways people engage with cryptocurrencies. Trading
            involves buying and selling digital assets with the aim of making short-term profits by
            exploiting market fluctuations. It requires active monitoring of price movements and
            technical analysis to identify trading opportunities. On the other hand, investing
            entails buying cryptocurrencies with a long-term view, believing in their potential for
            future growth. Investors typically hold their assets for an extended period, focusing on
            fundamental analysis and the underlying technology and adoption of the cryptocurrency.
          </p>
          <h5>Risk Management</h5>
          <p class="learn-text">
            Regardless of whether you're trading or investing, effective risk management is crucial.
            It involves strategies such as setting stop-loss orders to limit potential losses,
            diversifying your portfolio to spread risk, and only investing what you can afford to
            lose. Emotions can also impact decision-making, so it's essential to stay disciplined
            and avoid making impulsive trades based on fear or greed.
          </p>
          <h5>Market Analysis</h5>
          <p class="learn-text">
            Conducting thorough market analysis is vital for successful trading and investing. This
            involves studying historical price data, evaluating market trends, and keeping abreast
            of news and events that could affect cryptocurrency prices. Technical analysis, which
            involves analyzing charts and indicators, can help traders identify entry and exit
            points, while fundamental analysis focuses on the intrinsic value of cryptocurrencies
            and their potential for long-term growth.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['Cryptocurrencies', 'Wallets', 'Blockchain', 'Trading'],
      currentCategory: 'Cryptocurrencies'
    }
  },
  methods: {
    setCurrentCategory(category) {
      this.currentCategory = category
    }
  }
}
</script>

<style scoped>
.list-group {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.learn-text {
  line-height: 2;
}

@media (max-width: 1000px) {
  .list-group {
    text-align: center;
  }
}
</style>
