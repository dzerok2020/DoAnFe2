import { createRouter, createWebHistory } from "vue-router";
import PlayView from "@/views/PlayView.vue";
import HomeView from "@/views/HomeView.vue";
import ChatApp from "@/views/ChatApp.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AuthView from "@/views/AuthView.vue";
import InventoryView from "@/views/InventoryView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/",
      name: "play",
      component: PlayView,
    },
    {
      path: "/",
      name: "inventory",
      component: InventoryView,
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatApp,
    },
    {
      path: "/auth",
      redirect: "/login",
      name: "Auth",
      component: AuthView,
      meta: { isGuest: true },
      children: [
        {
          path: "/login",
          name: "login",
          component: LoginView,
        },
        {
          path: "/register",
          name: "register",
          component: RegisterView,
        },
      ],
    },
  ],
});

export default router;
