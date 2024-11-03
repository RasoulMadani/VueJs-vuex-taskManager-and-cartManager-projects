<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";

export default {
  setup() {
    const store = useStore();
    const tasks = computed(() => store.getters.allTasks);
    const loading = ref(false);

    async function fetchTasks() {
      loading.value = true;
      await store.dispatch("fetchTasks");
      loading.value = false;
    }

    fetchTasks();
    return {
      tasks,
      loading
    }
  }
}
</script>

<template>
  <div>
    <div v-if="loading" class="container">
      <div class="row">
        <div class="spinner-border" role="status"></div>
      </div>
    </div>
    <div v-else class="container mt-5">
      <div class="row g-3">
        <div v-for="task in tasks" :key="task.id" class="col-md-4 ">
          <div class="card" :class="{'bg-light':task.completed}">
            <div class="card-body">
              <del v-if="task.completed">{{ task.title }}</del>
              <div v-else> {{ task.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>