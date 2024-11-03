<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <a class="navbar-brand ms-4" href="#">WebProg</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
          <router-link to="/" class="nav-link" >Home </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tasks" class="nav-link" >Tasks </router-link>
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