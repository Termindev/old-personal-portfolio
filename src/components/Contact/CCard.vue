<script setup>
const props = defineProps({
  color: String,
});
const copy = async () => {
  try {
    await navigator.clipboard.writeText("719050609374003210");
    alert("Copied");
  } catch ($e) {
    alert("Cannot copy");
  }
};
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
      <span
        @click="copy"
        class="p-2 rounded-lg aurora-outer inline-block m-2 hover:border border-sky-400 transition-all"
        >Copy ID</span
      >
    </div>
  </div>
</template>
<style scoped>
/* .icon {
  filter: invert(35%) sepia(70%) saturate(4228%) hue-rotate(227deg)
    brightness(103%) contrast(90%);
} */
</style>
