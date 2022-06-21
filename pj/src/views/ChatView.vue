<template>
  <div class="flex flex-col h-full">
    <div class="basis-93/100 bg-gray-100 border-2 border-gray-300 relative">
      <div class="absolute inset-0">
        <div class="scroll overflow-scroll h-full">
          <ul class="break-all pl-2">
            <li v-for="msg in messages" :key="msg">
              <span v-if="!msg.system">{{ msg.username }}: </span>
              <span v-else>{{ msg.username }} </span>
              <span>{{ msg.message }}</span>
              <span class="text-pink-500">{{ msg.system }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="basis-7/100 bg-gray-100 border-2 border-gray-300 h-full relative"
    >
      <ad-textarea
        @keyup.enter="sendMessage"
        v-model="message"
        placeholder="Type your message"
        classes="absolute inset-y-0 left-0 right-8 pl-2 pt-1 text-gray-300 resize-none placeholder:text-gray-500/50 focus:outline-none focus:ring-0 overflow-hidden"
      />
      <div class="absolute inset-y-0 right-0 px-1.5 cursor-pointer flex h-full">
        <svg
          class="ov-icon ov-flip-vertical w-6 h-6 my-auto"
          aria-hidden="true"
          viewBox="0 0 512 512"
          fill="#BDC3C8"
          style="font-size: 2.88em"
        >
          <path
            d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { database, ref, push, onValue } from "@/firebase";
import AdTextarea from "@/components/atoms/AdTextarea.vue";
import { useUsersStore } from "@/store/users";

export interface ChatUser {
  username: string;
  message: string;
  system: string;
}

export default defineComponent({
  setup() {
    const username = useUsersStore();
  },
  components: { AdTextarea },
  props: {
    username: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      user: useUsersStore(),
      message: "" as string,
      messages: [] as ChatUser[],
    };
  },
  mounted() {
    this.getMessage();
  },
  updated() {
    this.scrollToEnd();
  },
  methods: {
    sendMessage() {
      if (this.message.length > 1) {
        push(ref(database, `play-${this.user.room}/` + "message"), {
          username: this.username,
          message: this.message,
        });
      }
      this.message = "";
    },
    getMessage() {
      onValue(ref(database, `play-${this.user.room}/message`), (snapshot) => {
        this.messages = [];
        snapshot.forEach((child) => {
          this.messages.push(child.val());
        });
      });
    },
    scrollToEnd() {
      var container = document.querySelector(".scroll");
      var scrollHeight = container!.scrollHeight;
      container!.scrollTop = scrollHeight;
    },
  },
});
</script>

<style scoped></style>
