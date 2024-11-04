<script>
import {useTaskStore} from "../../store/task.js";
import {ref} from "vue";

export default {
  props: ['id'],
  setup(props) {
    const store = useTaskStore();
    const loading = ref(false);

    async function deleteTask(task) {
      loading.value = true;
      await store.deleteTask(props.id);
      loading.value = false;

    }


    return {
      deleteTask,
      loading,
    }
  }
}
</script>

<template>
  <div>
    <span @click="deleteTask" class="bi bi-trash-fill ms-3" ></span>

    <span v-if="loading" class="spinner-border spinner-border-sm"></span>

  </div>
</template>

<style scoped>

</style>