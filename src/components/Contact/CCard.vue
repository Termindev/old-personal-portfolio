<script setup>
const props = defineProps({
  color: String,
});
</script>

<template>
  <div
    class="aurora-inner shadow rounded-xl md:hover:scale-105 p-4 hover:shadow-xl transition-all cursor-pointer"
    style="max-width: 220px"
  >
    <div title="icon" :class="color">
      <slot></slot>
    </div>
    <div class="info text-center">
      <h3 class="text-2xl">Discord</h3>
      <p>Termin#6068</p>
    </div>
  </div>
</template>
<style scoped>
/* .icon {
  filter: invert(35%) sepia(70%) saturate(4228%) hue-rotate(227deg)
    brightness(103%) contrast(90%);
} */
</style>
