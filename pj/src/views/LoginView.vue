<template>
  <div class="bg-gray-300">
    <div class="w-full h-screen flex items-center justify-center">
      <form
        class="w-full md:w-1/3 bg-white rounded-lg"
        @submit.prevent="submit"
      >
        <div class="flex font-bold justify-center mt-6">
          <img
            class="h-20 w-20"
            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"
          />
        </div>
        <h2 class="text-3xl text-center text-gray-700 mb-4">Login</h2>
        <div class="px-12 pb-10">
          <div v-if="error" class="alert alert-danger text-red-500">
            {{ error }}
          </div>
          <div class="w-full mb-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <div class="flex items-center">
              <input
                v-model="from.email"
                id="email"
                type="text"
                placeholder="Email"
                class="-mx-6 ml-0 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div class="w-full mb-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <div class="flex items-center">
              <input
                v-model="from.password"
                id="password"
                type="password"
                placeholder="Password"
                class="-mx-6 ml-0 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <span class="text-xs text-gray-500 float-right mb-4"
            >Do not have an account?
            <span
              class="cursor-pointer text-sky-600 hover:text-sky-400"
              @click="$router.push({ name: 'register' })"
              >Register.</span
            ></span
          >
          <button
            type="submit"
            class="w-full py-2 rounded-full bg-green-600 text-gray-100 hover:bg-green-500 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import AdInput from "@/components/atoms/AdInput.vue";
import AdButton from "@/components/atoms/AdButton.vue";
import { defineComponent } from "vue";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { database, ref, push, onValue } from "@/firebase";
import { useUsersStore } from "@/store/users";
import { getDatabase, set } from "firebase/database";

export default defineComponent({
  components: {
    AdButton,
    AdInput
  },
  data() {
    return {
      user: useUsersStore(),
      from: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    submit() {
      signInWithEmailAndPassword(getAuth(), this.from.email, this.from.password)
        .then(async (data) => {
          this.user.setTokens(await data.user.getIdToken());
          await this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
          switch (error.code) {
            case "auth/invalid-email":
              this.error = "Invalid email";
              break;
            case "auth/user-not-found":
              this.error = "No account with that email was found";
              break;
            case "auth/wrong-password":
              this.error = "incorrect password";
              break;
            default:
              this.error = "Email or password is incorrect";
              break;
          }
        });
    }
  }
});
</script>

<style scoped></style>
