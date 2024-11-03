<script >
import {useStore} from "vuex";
import {computed} from "vue";

export default {
setup(){
  const store= useStore();
  const tasks = computed(()=>store.getters.allTasks);
  function fetchTasks(){
    store.dispatch("fetchTasks");
  }
  fetchTasks();
  return {
tasks
  }
}
}
</script>

<template>
<h2>Task Component</h2>
  {{tasks}}
</template>

<style scoped>

</style>