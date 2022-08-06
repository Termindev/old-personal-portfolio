<template>
  <hr />
  <div class="aurora-outer" id="works">
    <div class="text-center py-10">
      <span class="text-4xl">Works</span>
      <div class="text-2xl">here's some Projects I've made</div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
      <Work
        TagOne="Bootstrap"
        Title="Discord Bot website"
        imgLink="https://cdn.discordapp.com/attachments/977962045599277139/1005481632813289492/work2.gif"
      />
    </div>
  </div>
</template>

<script>
import Work from "@/components/Works/Work.vue";

export default {
  components: {
    Work,
  },
};
</script>

<style></style>
