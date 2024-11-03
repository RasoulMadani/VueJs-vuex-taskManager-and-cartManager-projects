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
<div class="container mt-5">
  <div class="row g-3">
    <div v-for="task in tasks" :key="task.id" class="col-md-4 ">
      <div class="card" :class="{'bg-light':task.completed}">
        <div class="card-body">
          <del v-if="task.completed">{{task.title}}</del>
          <div v-else> {{task.title}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>