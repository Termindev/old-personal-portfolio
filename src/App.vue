<script setup>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Visit from "@/components/Visit.vue";
</script>
<template>
  <Nav />
  <Visit />
  <router-view />
  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  scroll-behavior: smooth;
  font-family: "Nunito", sans-serif;
}

.aurora-outer {
  background: linear-gradient(45deg, #32a6ff 0%, #3f6fff 49%, #8d54ff 82%);
  background-size: 200%;
  animation: aurora 10s infinite;
}

.aurora-inner {
  background: radial-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.15)
  );
  background-size: 200%;
  animation: aurora 7s infinite;
}

@keyframes aurora {
  0% {
    background-position: left top;
  }
  25% {
    background-position: right top;
  }
  50% {
    background-position: right bottom;
  }
  75% {
    background-position: left bottom;
  }
  100% {
    background-position: left top;
  }
}

html::-webkit-scrollbar {
  width: 0.8vw;
}

html::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: rgb(50, 166, 255, 0.9);
}

html::-webkit-scrollbar-thumb:hover {
  background-color: rgba(22, 137, 224, 0.8);
}
html::-webkit-scrollbar-track {
  background-color: rgba(116, 46, 255, 0.8);
  box-shadow: 5px 10px;
}
</style>
