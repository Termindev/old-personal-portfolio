<script setup>
const props = defineProps({
  imgLink: String,
  title: String,
  color: String,
});
</script>

<template>
  <div class="container" style="max-width: 240px">
    <div class="card">
      <div class="slide slide1">
        <div class="content">
          <div :class="color" class="icon">
            <img
              :src="imgLink"
              :alt="title"
              class="m-auto mt-2"
              style="max-width: 180px"
            />
          </div>
        </div>
      </div>

      <div class="slide slide2">
        <div class="content">
          <h3>{{ title }}</h3>

          <p><a href="#works">View Works</a> with it.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container .card .icon {
  position: absolute;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;
}

.container .card .icon .fa {
  position: absolute;

  top: 50%;

  left: 50%;

  transform: translate(-50%, -50%);

  font-size: 80px;

  color: #fff;
}

.container .card .slide {
  width: 300px;

  height: 200px;

  transition: 0.5s;
}

.container .card .slide.slide1 {
  position: relative;

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 1;

  transition: 0.7s;

  transform: translateY(100px);
}

.container .card:hover .slide.slide1 {
  transform: translateY(0px);
}

.container .card .slide.slide2 {
  position: relative;

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 20px;

  box-sizing: border-box;

  transition: 0.8s;

  transform: translateY(-100px);

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.container .card:hover .slide.slide2 {
  transform: translateY(0);
}

.container .card .slide.slide2::after {
  content: "";

  position: absolute;

  width: 30px;

  height: 4px;

  bottom: 15px;

  left: 50%;

  left: 50%;

  transform: translateX(-50%);

  background: black;
}

.container .card .slide.slide2 .content p {
  margin: 0;

  padding: 0;

  text-align: center;

  color: #d6d6d6;
}

.container .card .slide.slide2 .content h3 {
  margin: 0 0 10px 0;

  padding: 0;

  font-size: 24px;

  text-align: center;

  color: #d6d6d6;
}
</style>
