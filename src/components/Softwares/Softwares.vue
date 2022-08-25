<script setup>
import Software from "./Software.vue";
import VueWriter from "vue-writer";
import { ref } from "@vue/reactivity";

const show = ref(false);
const toggleShow = () => {
  show.value = !show.value;
};
</script>

<template>
  <hr />
  <div class="aurora-outer pb-6" id="softwares">
    <div class="text-center pt-14">
      <h1 class="text-4xl my-10 mx-1">
        Here are the
        <VueWriter
          class="sm:mx-1 inline"
          :array="['Languages I use', 'Frameworks I use', 'Softwares I use']"
        />
      </h1>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 md:pl-8 mr-14 lg:grid-cols-3 place-items-center"
    >
      <Software
        imgLink="https://i.im.ge/2022/08/06/FcvxyS.download-removebg-preview.png"
        title="Vue.js"
        color="bg-green-600"
      />
      <Software
        imgLink="https://i.im.ge/2022/08/06/FcvzHD.Unofficial-JavaScript-logo-2-svg.png"
        title="JavaScript"
        color="bg-yellow-600"
      />
      <Software
        imgLink="https://i.im.ge/2022/08/06/FcJl10.Tailwind-CSS-Logo-svg-removebg-preview.png"
        title="Tailwind CSS"
        color="bg-blue-600"
      />
      <Software
        imgLink="https://i.im.ge/2022/08/06/FcJoHW.Bootstrap-logo-svg-removebg-preview.png"
        title="Bootstrap"
        color="bg-purple-600"
      />
      <Software
        imgLink="https://i.im.ge/2022/08/25/OjjxYP.dart.png"
        title="Dart"
        id="move"
        color="bg-sky-600"
      />
      <Software
        imgLink="https://i.im.ge/2022/08/25/OjjWm0.jest.png"
        title="Jest"
        color="bg-orange-600"
      />
      <div />
      <Software
        imgLink="https://i.im.ge/2022/08/25/OjjBmz.nuxt-removebg-preview.png"
        title="Nuxt"
        color="bg-green-600"
      />
      <div />
    </div>
  </div>
</template>

<style scoped>
svg {
  transition: all 0.4s ease;
}

.svg {
  transform: rotate(180deg);
}
</style>
