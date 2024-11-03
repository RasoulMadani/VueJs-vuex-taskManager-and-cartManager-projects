<script>
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  props: ['task'],
  setup() {
    const store = useStore();
    const loading = ref(false);

    async function updateTask(task) {
      loading.value = true;
      await store.dispatch('task/updateTask',task);
      loading.value = false;

    }


    return {
      updateTask,
      loading,
    }
  }
}
</script>

<template>
  <div>
    <span v-if="task.completed" @click="updateTask(task)" class="bi bi-check-all" style="font-size: 22px"></span>
    <span v-else class="bi bi-check" @click="updateTask(task)" style="font-size: 22px"></span>
    <span v-if="loading" class="spinner-border spinner-border-sm"></span>

  </div>
</template>

<style scoped>

</style>