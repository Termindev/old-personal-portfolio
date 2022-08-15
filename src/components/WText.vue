<script setup>
import VueWriter from "vue-writer";
</script>

<template>
  <div class="aurora-outer" style="height: 92vh">
    <div class="sm:flex text-5xl mx-12 sm:mx-20 pt-44 mb-12">
      <span class="sm:mx-1"
        >Hello, I'm

        <VueWriter
          class="inline ml-1"
          :array="['TerminDev.', 'a Web Developer.']"
        />
      </span>
    </div>
    <a
      href="#works"
      class="md:ml-20 sm:ml-8 ml-10 mt-10 p-4 rounded-xl aurora-inner shadow-xl hover:shadow-2xl transition-all"
      >View My work</a
    >
    <router-link
      to="/contact"
      class="md:ml-5 sm:ml-4 ml-2 p-4 rounded-xl aurora-inner shadow-xl hover:shadow-2xl transition-all"
      >Hire Me</router-link
    >
  </div>
</template>
<style>
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
