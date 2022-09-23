<script setup>
import { ref } from "@vue/reactivity";
import Spinner from "./Spinner.vue";
const form = ref(null);
const Loading = ref(false);
const sending = ref(false);

const send = () => {
  Loading.value = true;
  sending.value = true;
  setTimeout(() => {
    sending.value = false;
    setTimeout(() => {
      Loading.value = false;
    }, 2000);
  }, 2 * 1000);
};
</script>

<template>
  <form ref="form" @submit.prevent class="mt-8">
    <div class="mb-8 text-2xl">
      <span>Full Name</span>
      <input
        class="rounded hover:shadow-lg transition-all mt-4 md:w-4/5 w-full border-b aurora-inner outline-none border-slate-700 block"
        type="text"
        name="user_name"
        placeholder="Brendan Eich"
      />
    </div>
    <div class="mb-8 text-2xl">
      <span>Email</span>
      <input
        class="text-2xl rounded hover:shadow-lg transition-all mt-4 md:w-4/5 w-full border-b outline-none aurora-inner border-slate-700 block"
        type="email"
        name="user_email"
        placeholder="Brendan@email.com"
      />
    </div>
    <div class="mb-8 text-2xl">
      <span>Message</span>
      <textarea
        class="rounded hover:shadow-lg transition-all mt-4 h-20 md:w-4/5 w-full aurora-inner resize-none outline-none border-b border-slate-700 block"
        name="message"
        placeholder="Hello,&#10;I want to hire you"
      ></textarea>
    </div>
  </form>
  <button class="mx-2 aurora-inner p-3 rounded-lg" @click="send">Send</button>
  <section
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aurora-inner shadow-lg rounded-xl p-8 z-50"
    v-if="Loading"
  >
    <div class="text-center" v-if="sending">
      <h1 class="text-4xl my-2 mb-4">Sending Message</h1>
      <Spinner />
    </div>
    <div class="text-center" v-else>
      <h1 class="text-4xl my-2 mb-4">Message Sent (Not actually)</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-16 h-16 mx-auto"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
::placeholder {
  color: white;
  opacity: 0.6;
  font-size: 20px;
}
</style>
