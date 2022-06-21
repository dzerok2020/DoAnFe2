<template>
  <!--  <login-view v-if="!login.showChatView" @login="getUsername" />-->
  <!--  <chat-view v-else :username="login.username" />-->

  <div
    class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <div>
      <span
        class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
      >
        <svg
          class="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <!-- ... -->
        </svg>
      </span>
    </div>
    <h3
      class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
    >
      Writes Upside-Down
    </h3>
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      The Zero Gravity Pen can be used to write in any orientation, including
      upside-down. It even works in outer space.
    </p>
  </div>
</template>

<script lang="ts">
import LoginView from "@/views/LoginView.vue";
import ChatView from "@/views/ChatView.vue";
import { defineComponent } from "vue";

export interface Login {
  username: string;
  showChatView: boolean;
}

export default defineComponent({
  components: {
    LoginView,
    ChatView,
  },
  data() {
    return {
      login: {} as Login,
    };
  },
  methods: {
    getUsername(username: string) {
      this.login.username = username;
      this.login.showChatView = true;
    },
  },
});
</script>

<style scoped></style>
