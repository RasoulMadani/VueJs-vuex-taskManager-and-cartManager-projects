<script >
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup(){
    const store = useStore();
    const count = computed(() => store.state.count);

    return{
      count
    }
  }
}
</script>

<template>
<h2>Home</h2>
  <h1>{{count}}</h1>
</template>

<style scoped>

</style>