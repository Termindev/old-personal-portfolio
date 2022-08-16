<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "@vue/reactivity";
const form = ref(null);

const sendEmail = () => {
  emailjs
    .sendForm(
      process.env.VUE_APP_SERVICE,
      process.env.VUE_APP_TEMPLATE,
      form.value,
      process.env.VUE_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  form.value.reset();
};
</script>

<template>
  <form ref="form" @submit.prevent="sendEmail" class="mt-8">
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
    <input
      class="cursor-pointer hover:shadow-2xl transition-all p-3 outline-none mt-1 rounded-xl aurora-inner shadow-lg block"
      type="submit"
      value="Send"
    />
    <div
      class="g-recaptcha"
      data-sitekey="6Lf0bX4hAAAAAPRWaRgeWKrS4jOSs8IAeRH3O3Lt"
    ></div>
  </form>
</template>

<style scoped>
::placeholder {
  color: white;
  opacity: 0.6;
  font-size: 20px;
}
</style>
