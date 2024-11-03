<script >
import {useStore} from "vuex";
import {ref} from "vue";

export default {

  setup(){
    const store = useStore();
    const number = ref();
    function filterTasks(){
      store.dispatch('filterTasks',number.value);
    }
    return {
    filterTasks,number
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-2 mb-4">
      <h6>Filter Tasks :</h6>
      <select v-model="number" @change="filterTasks" class="form-select form-select-sm">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  </div>
</template>

<style scoped>

</style>