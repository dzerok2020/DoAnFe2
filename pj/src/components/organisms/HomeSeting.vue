<template>
  <div class="absolute w-full">
    <div class="flex justify-end">
      <div class="bg-gray-900/50 w-fit px-5 py-2 rounded-md">
        <coin-rose-gem
          :label-coin="labelCoin"
          :label-gem="labelGem"
          :label-rose="labelRose"
          :name-router-shop="nameRouterShop"
        />
      </div>
      <div class="bg-gray-900/50 w-fit px-5 py-2 rounded-md mx-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline-block mb-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
          />
        </svg>
        <ad-text tag="span" class="m-auto"> Friends </ad-text>
      </div>
      <div
        class="bg-gray-900/50 w-fit h-fit px-4 py-2 rounded-md cursor-pointer"
        @click="logout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="bg-gray-900/50 w-fit h-fit px-4 py-2 rounded-md mx-3"
        @click="$router.push({ name: nameRouterHelp })"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CoinRoseGem from "@/components/molecules/CoinRoseGem.vue";
import AdText from "@/components/atoms/AdText.vue";
import {defineComponent, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut, type Auth} from "firebase/auth";
import {useUsersStore} from "@/store/users";
import {database, onValue} from "@/firebase";

const isLogin = ref(false);
let auth: Auth;

export default defineComponent({
  components: {
    CoinRoseGem,
    AdText,
  },
  props: {
    labelCoin: {
      type: String,
      default: "",
    },
    labelGem: {
      type: String,
      default: "",
    },
    labelRose: {
      type: String,
      default: "",
    },
    nameRouterShop: {
      type: String,
      default: "",
    },
    nameRouterSettings: {
      type: String,
      default: "",
    },
    nameRouterHelp: {
      type: String,
      default: "",
    },
  },
  mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      isLogin.value = !!user;
    });
  },
  methods: {
    logout() {
      getAuth(auth.app).signOut();
      const users = useUsersStore();
      users.logout();
      this.$router.push({ name: this.nameRouterSettings })
    }
  },
});

</script>

<style scoped></style>
