<template>
  <form
    ref="form"
    @submit.prevent="
      sendEmail();
      this.$refs.form.reset();
    "
    class="md:p-10"
  >
    <label class="my-8 text-2xl">
      <span class="my-6">Full Name</span>
      <input
        class="rounded hover:shadow-lg transition-all mt-4 md:w-4/5 w-11/12 border-b aurora-inner outline-none border-slate-700 block"
        type="text"
        name="user_name"
        placeholder="Brendan Eich"
      />
    </label>
    <label class="md:my-8 text-2xl">
      <span class="my-6">Email</span>
      <input
        class="rounded hover:shadow-lg transition-all mt-4 md:w-4/5 w-11/12 border-b outline-none aurora-inner border-slate-700 block"
        type="email"
        name="user_email"
        placeholder="Brendan@email.com"
      />
    </label>
    <label class="md:my-8 text-2xl">
      <span class="my-6">Message</span>
      <textarea
        class="rounded hover:shadow-lg transition-all mt-4 h-20 md:w-4/5 w-11/12 aurora-inner resize-none outline-none border-b border-slate-700 block"
        name="message"
        placeholder="Hello,&#10;I wan't to hire you"
      ></textarea>
    </label>
    <input
      class="cursor-pointer hover:shadow-2xl transition-all p-3 outline-none mt-1 rounded-xl aurora-inner shadow-lg block"
      type="submit"
      value="Send"
    />
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {};
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          process.env.VUE_APP_SERVICE,
          process.env.VUE_APP_TEMPLATE,
          this.$refs.form,
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
    },
  },
};
</script>

<style scoped>
::placeholder {
  color: white;
  opacity: 0.6;
  font-size: 20px;
}
</style>
