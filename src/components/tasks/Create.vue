<script >
import {useStore} from "vuex";
import {ref} from "vue";

export default {

  setup(){
    const store = useStore();
    const title = ref("");
    const titleErrorText= ref("");
    const loading = ref(false);

    async function storeTask(){
      if(title.value === ""){
        titleErrorText.value="title is required";
      }else{
        loading.value = true;
        titleErrorText.value="";

        await store.dispatch('storeTasks',title.value);
        loading.value = false;
        title.value="";
      }

    }
    return {
      storeTask,
      title,
      titleErrorText,
      loading,
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-12 mb-4">
      <h4>Create Tasks :</h4>
      <form @submit.prevent="storeTask" class="row">
        <div class="col-md-6">
          <input v-model="title" type="text" class="form-control" />
          <div class="form-text text-danger">
           {{titleErrorText}}
          </div>
        </div>
        <div class="col-auto">
          <button :disabled="loading" type="submit" class="btn btn-dark">Create Task
          <span v-if="loading" class="spinner-border spinner-border-sm"></span>
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<style scoped>

</style>