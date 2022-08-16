import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Contact from "../views/Contact.vue";
import Four04 from "../views/404.vue";

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
  { path: "/404", component: Four04 },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
