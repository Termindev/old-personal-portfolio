import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
