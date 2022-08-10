<script setup>
import Software from "./Software.vue";
import VueWriter from "vue-writer";
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
      class="grid grid-cols-1 md:grid-cols-2 md:pl-8 mr-14 lg:grid-cols-3 place-items-center cn"
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
        alt="Tailwind_CSS_Logo.svg-removebg-preview"
        title="Tailwind CSS"
        color="bg-blue-600"
      />
      <Software
        imgLink="https://i.im.ge/2022/08/06/FcJoHW.Bootstrap-logo-svg-removebg-preview.png"
        alt="Bootstrap_logo.svg-removebg-preview"
        title="Bootstrap"
        color="bg-purple-600"
      />
    </div>
  </div>
</template>
