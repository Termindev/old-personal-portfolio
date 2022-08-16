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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
      <Work
        TagOne="HTML & CSS"
        TagTwo="JS"
        Title="Discord Bot website"
        imgLink="https://i.im.ge/2022/08/16/O1bwzX.jswork1.gif"
      />
    </div>
  </div>
</template>
