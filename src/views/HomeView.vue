<template>
  <div class="home">
      <div class="splash-container">
        <div class="splash">
          <h1>Fresh And Organic Food</h1>
        </div>
      </div>

      <main class="wrapper">

        <h2>Recommended</h2>

        <div class="recommended card-container" id="items-container">
          <ProductCard 
            v-for="(product, index) in inventory.slice(0,5)" 
            :key="product.id"
            class="card"
            :index="index"
            :product="product"
            :addToCart="addToCart"
          />

        </div>

      </main>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
export default {
  name: 'HomeView',
  props:['inventory', 'addToCart']
,
  components: {
    ProductCard
  }
}
</script>
