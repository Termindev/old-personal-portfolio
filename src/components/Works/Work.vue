<script setup>
const props = defineProps({
  imgLink: String,
  Title: String,
  TagOne: String,
  TagTwo: String,
  TagThree: String,
});
</script>

<template>
  <div
    class="max-w-sm rounded-lg overflow-hidden shadow-xl border border-slate-700 border-opacity-30"
  >
    <img class="w-full" :src="imgLink" :alt="Title" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl">{{ Title }}</div>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-show="TagOne"
        class="inline-block aurora-inner rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ TagOne }}</span
      >
      <span
        v-show="TagTwo"
        class="inline-block aurora-inner rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ TagTwo }}</span
      >
      <span
        v-show="TagThree"
        class="inline-block aurora-inner rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ TagThree }}</span
      >
    </div>
  </div>
</template>
