<script setup>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <Nav />
  <router-view> </router-view>
  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Dosis:wght@300&family=Lobster&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

* {
  scroll-behavior: smooth;
  font-family: "Dancing Script", cursive;
  font-family: "Dosis", sans-serif;
  font-family: "Lobster", cursive;
  font-family: "Poppins", sans-serif;
  font-family: "Ubuntu", sans-serif;
}

/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(120px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
} */

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
</style>
