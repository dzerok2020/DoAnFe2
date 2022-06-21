import { createRouter, createWebHistory } from "vue-router";
import PlayView from "@/views/PlayView.vue";
import HomeView from "@/views/HomeView.vue";
import LoadingPlay from "@/views/LoadingPlay.vue";
import ChatApp from "@/views/ChatApp.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AuthView from "@/views/AuthView.vue";
import { useUsersStore } from "@/store/users";

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
      path: "/loading",
      name: "loading",
      component: LoadingPlay,
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

// router.beforeEach((to, from, next) => {
//   const user = useUsersStore();
//   console.log(user.token);
//   if (to.meta.requiresAuth && !user.token) {
//     next({ name: "login" });
//   } else if (user.token && to.meta.isGuest) {
//     next({ name: "home" });
//   } else {
//     next();
//   }
// });

export default router;
