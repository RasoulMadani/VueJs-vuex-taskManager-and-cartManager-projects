<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.getters['product/allProduct']);
    function addToCart(product){
      store.dispatch('cart/addToCart',product);
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
  Cart
</div>
</template>

<style scoped>

</style>