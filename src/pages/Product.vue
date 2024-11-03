<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.getters['product/allProduct']);
    return {
      products
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
              <button class="btn btn-outline-success btn-sm">Add to Cart</button>
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