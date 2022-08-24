<script setup>
const { ref } = require("@vue/reactivity");

const props = defineProps({
  color: String,
  Tag: String,
  Name: String,
  Title: String,
  ID: String,
});
const show = ref(false);

const copy = async () => {
  try {
    show.value = !show.value;
    await navigator.clipboard.writeText(props.ID);
  } catch ($e) {
    console.log("Cannot copy");
  }
  setTimeout(() => {
    show.value = !show.value;
  }, 2000);
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
      <h3 class="text-2xl">{{ Tag }}</h3>
      <div>
        {{ Name }}
      </div>
      <span
        class="p-2 relative rounded-lg aurora-inner inline-block m-2 hover:border border-sky-400 transition-all"
        @click="copy()"
      >
        <transition name="id">
          <div
            class="absolute bottom-12 right-0 whitespace-nowrap p-1 rounded-xl aurora-outer py-2 shadow-lg"
            v-show="show"
          >
            ID Copied
          </div>
        </transition>
        Copy ID
      </span>
    </div>
  </div>
</template>
<style scoped>
.id-enter-from,
.id-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.id-enter-active,
.id-leave-active {
  transition: all 0.4s ease;
}

/* .icon {
  filter: invert(35%) sepia(70%) saturate(4228%) hue-rotate(227deg)
    brightness(103%) contrast(90%);
} */
</style>
