import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VueWriter from "vue-writer";

createApp(App).use(VueWriter).use(router).mount("#app");
