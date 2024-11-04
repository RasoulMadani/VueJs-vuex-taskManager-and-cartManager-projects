<script >
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup(){
    const store  = useStore();
    const countCartItems = computed(()=>store.getters["cart/countCartItems"]);
    return {
      countCartItems
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <a class="navbar-brand ms-4" href="#">WebProg</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
          <router-link to="/" class="nav-link" >Home </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tasks" class="nav-link" >Tasks </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link" >Products </router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto me-4">
        <li class="nav-item">
          <router-link to="/cart" class="nav-link me-1 p-1" >
            <span class="badge rounded-pill bg-primary me-1">{{ countCartItems }}</span>
            <i class="bi bi-basket-fill" style="font-size: 23px"></i>
          </router-link>
        </li>
      </ul>

    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: rgba(0,0,0,0.9) !important;
  border-bottom: 2px solid rgba(0,0,0,0.9) !important;
}
</style>