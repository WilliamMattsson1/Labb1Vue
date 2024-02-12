<template>
  <div class="container-fluid mt-4">
    <h1 class="text-center mb-4 blue-word">Learn</h1>
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
      <div class="col-lg-9 col-12 pr-4">
        <div v-if="currentCategory === 'Cryptocurrencies'" class="pt-4">
          <h2>Cryptocurrencies</h2>
          <p class="learn-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repudiandae accusamus
            magni quisquam veritatis ipsam voluptatum hic veniam accusantium ullam. Rerum dolor
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            eos delenit
          </p>
          <h5>Cryptocurrencies</h5>
          <p class="learn-text">
            Sunt hic quis itaque consequatur, labore odio architecto voluptatibus cupiditate numquam
            praesentium. At blanditiis itaque officia explicabo animi sapiente esse numquam. Eum aut
            quia molestias ex consectetur voluptatibus minus beatae sapiente laborum, iusto iure,
            quam, enim vero error pariatur voluptate ipsam inventore quod labore a! Architecto
            quidem molestias doloribus molestiae ea! Distinctio quam ratione eaque soluta dolore,
            enim ea
          </p>
        </div>
        <div v-else-if="currentCategory === 'Wallets'">
          <h2>Wallets</h2>
          <p class="learn-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repudiandae accusamus
            magni quisquam veritatis ipsam voluptatum hic veniam accusantium ullam. Rerum dolor
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            eos delenit
          </p>
          <h5>Cryptocurrencies</h5>
          <p class="learn-text">
            Sunt hic quis itaque consequatur, labore odio architecto voluptatibus cupiditate numquam
            praesentium. At blanditiis itaque officia explicabo animi sapiente esse numquam. Eum aut
            quia molestias ex consectetur voluptatibus minus beatae sapiente laborum, iusto iure,
            quam, enim vero error pariatur voluptate ipsam inventore quod labore a! Architecto
            quidem molestias doloribus molestiae ea! Distinctio quam ratione eaque soluta dolore,
            enim ea
          </p>
        </div>
        <div v-else-if="currentCategory === 'Blockchain'">
          <h2>Blockchain</h2>
          <p class="learn-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repudiandae accusamus
            magni quisquam veritatis ipsam voluptatum hic veniam accusantium ullam. Rerum dolor
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            eos delenit
          </p>
          <h5>Cryptocurrencies</h5>
          <p class="learn-text">
            Sunt hic quis itaque consequatur, labore odio architecto voluptatibus cupiditate numquam
            praesentium. At blanditiis itaque officia explicabo animi sapiente esse numquam. Eum aut
            quia molestias ex consectetur voluptatibus minus beatae sapiente laborum, iusto iure,
            quam, enim vero error pariatur voluptate ipsam inventore quod labore a! Architecto
            quidem molestias doloribus molestiae ea! Distinctio quam ratione eaque soluta dolore,
            enim ea
          </p>
        </div>
        <div v-else-if="currentCategory === 'Trading'">
          <h2>Trading</h2>
          <p class="learn-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repudiandae accusamus
            magni quisquam veritatis ipsam voluptatum hic veniam accusantium ullam. Rerum dolor
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            eos delenit
          </p>
          <h5>Cryptocurrencies</h5>
          <p class="learn-text">
            Sunt hic quis itaque consequatur, labore odio architecto voluptatibus cupiditate numquam
            praesentium. At blanditiis itaque officia explicabo animi sapiente esse numquam. Eum aut
            quia molestias ex consectetur voluptatibus minus beatae sapiente laborum, iusto iure,
            quam, enim vero error pariatur voluptate ipsam inventore quod labore a! Architecto
            quidem molestias doloribus molestiae ea! Distinctio quam ratione eaque soluta dolore,
            enim ea
          </p>
        </div>
        <div v-else-if="currentCategory === 'Investing'">
          <h2>Investing</h2>
          <p class="learn-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repudiandae accusamus
            magni quisquam veritatis ipsam voluptatum hic veniam accusantium ullam. Rerum dolor
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            consequuntur possimus, mollitia tempora illo alias reiciendis est. Omnis eveniet culpa
            eos delenit
          </p>
          <h5>Cryptocurrencies</h5>
          <p class="learn-text">
            Sunt hic quis itaque consequatur, labore odio architecto voluptatibus cupiditate numquam
            praesentium. At blanditiis itaque officia explicabo animi sapiente esse numquam. Eum aut
            quia molestias ex consectetur voluptatibus minus beatae sapiente laborum, iusto iure,
            quam, enim vero error pariatur voluptate ipsam inventore quod labore a! Architecto
            quidem molestias doloribus molestiae ea! Distinctio quam ratione eaque soluta dolore,
            enim ea
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
      categories: ['Cryptocurrencies', 'Wallets', 'Blockchain', 'Trading', 'Investing'],
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
