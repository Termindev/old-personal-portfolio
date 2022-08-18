<script setup>
const { onMounted } = require("@vue/runtime-core");

const props = defineProps({
  Done: Boolean,
  Title: String,
});
</script>

<template>
  <div>
    <div class="mx-4">
      <svg
        v-if="Done"
        xmlns="http://www.w3.org/2000/svg"
        class="h-14 w-14 inline-block relative bottom-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span v-else class="loader-spinner inline-block"></span>
      <span v-if="Done" class="text-3xl mx-4">{{ Title }}</span>
      <span v-else class="text-3xl mx-4 relative bottom-4">{{ Title }}</span>
    </div>
  </div>
</template>

<style scoped>
.loader-spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #3542f8);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: load-spin 0.8s infinite linear;
}
@keyframes load-spin {
  to {
    transform: rotate(1turn);
  }
}

svg {
  filter: invert(21%) sepia(85%) saturate(4794%) hue-rotate(238deg)
    brightness(97%) contrast(100%);
}
</style>
