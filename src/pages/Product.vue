<script>
import {useProductStore} from "../store/product.js";
import {useCartStore} from "../store/cart.js";
import {computed} from "vue";

export default {
  setup() {
    const productStore = useProductStore();
    const cartStore = useCartStore();
    const products = computed(() => productStore.allProduct);
    function addToCart(product){
      cartStore.addToCart(product);
    }
    return {
      products,
      addToCart
    }
  }
}
</script>

<template>
  <div>
    <div  class="container mt-5">

      <div class="row g-3">
        <div v-for="product in products" :key="product.id" class="col-md-3 ">
          <div class="card">
            <img :src="product.image" alt="" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{product.name}}</h5>
              <p>{{product.description}}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <button @click="addToCart(product)" class="btn btn-outline-success btn-sm">Add to Cart</button>
              <span>{{product.price}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>