<script >
export default {
  props:['task'],
}
</script>

<template>
<div>
  <span v-if="task.completed" class="bi bi-check-all" style="font-size: 22px"></span>
  <span v-else class="bi bi-check" style="font-size: 22px"></span>

</div>
</template>

<style scoped>

</style>