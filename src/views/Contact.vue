<template>
  <div class="aurora-outer grid grid-cols-1 lg:grid-cols-2 p-12 sm:p-24">
    <div>
      <h1 class="text-4xl my-4">Get in Contact</h1>
      <h4 class="text-2xl mb-4">Fill up this form to send me an email</h4>
      <ContactForm />
      <div class="border-b md:hidden border-slate-600 my-4"></div>
    </div>
    <div class="mt-2">
      <h1 class="md:text-4xl text-2xl mb-4">Want to straightly contact me?</h1>
      <h1 class="md:text-2xl text-xl mb-6">My Contact information</h1>
      <div>
        <CCard />
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import CCard from "@/components/Contact/CCard.vue";
import ContactForm from "@/components/Contact/ContactForm.vue";

export default {
  components: {
    CCard,
    ContactForm,
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
