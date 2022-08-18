<script setup>
import Goal from "./Goal.vue";
</script>

<template>
  <hr />
  <section class="aurora-outer h-screen">
    <div class="text-center p-6">
      <div class="text-6xl">Goals</div>
      <div class="text-xl">Goals I want to achieve</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <Goal Title="Learn Dart" :Done="true" />
      <Goal Title="Learn Flutter" :Done="false" />
      <Goal Title="Learn Python" :Done="false" />s
    </div>
  </section>
</template>
