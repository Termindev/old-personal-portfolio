<script setup>
import Work from "@/components/Works/Work.vue";
</script>

<template>
  <hr />
  <div class="aurora-outer" id="works">
    <div class="text-center py-10">
      <span class="text-4xl">Works</span>
      <div class="text-2xl">here's some Projects I've made</div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 place-items-center"
    >
      <Work
        TagOne="HTML & CSS"
        TagTwo="JS"
        Title="Discord Bot website"
        :imgLink="require('@/assets/work1.gif')"
      />
    </div>
  </div>
</template>
