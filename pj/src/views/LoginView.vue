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
          <div class="flex items-center justify-center gap-4 mt-4">
            <button
              @click="facebookSignIn"
              type="button"
              class="flex items-center justify-center w-full px-4 py-2 text-sm text-white text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500"
            >
              <svg
                class="ov-icon w-4 h-4 mr-2"
                aria-hidden="true"
                width="46.08"
                height="46.08"
                viewBox="-1.6 -1.6 19.2 19.2"
                fill="#2980B9"
                style="font-size: 2.88em"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                ></path>
              </svg>
              Facebook
            </button>
            <button
              type="button"
              @click="googleSignIn"
              class="flex items-center justify-center w-full px-4 py-2 text-sm text-white text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="w-4 h-4 mr-2"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlink:href="#a" overflow="visible" />
                </clipPath>
                <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clip-path="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clip-path="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clip-path="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                /></svg
              >Google
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import AdInput from "@/components/atoms/AdInput.vue";
import AdButton from "@/components/atoms/AdButton.vue";
import { defineComponent } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useUsersStore } from "@/store/users";
import { set } from "firebase/database";
import { database, ref } from "@/firebase";
import firebase from "firebase/compat";
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;

export default defineComponent({
  components: {
    AdButton,
    AdInput,
  },
  data() {
    return {
      user: useUsersStore(),
      from: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    facebookSignIn() {
      const provider = new FacebookAuthProvider();
      provider.addScope("email");
      const auth = getAuth();
      auth.languageCode = 'vi';
      // provider.setCustomParameters({
      //   'display': 'popup'
      // });
      signInWithPopup(auth, provider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // ...
            this.user.setTokens(accessToken);
            set(ref(database, `users/${user.uid}`), {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              token: accessToken,
            });
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
          });

    },
    googleSignIn() {
      const provider = new GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      const auth = getAuth();
      auth.languageCode = "vi";
      // provider.setCustomParameters({
      //   'login_hint': 'dzerok2020@gmail.com'
      // });
      signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          this.user.setTokens(token);
          set(ref(database, `users/${user.uid}`), {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            token: token,
          });
          // ...
          await this.$router.push({ name: "home" });
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    submit() {
      signInWithEmailAndPassword(getAuth(), this.from.email, this.from.password)
        .then(async (data) => {
          this.user.setTokens(await data.user.getIdToken());
          await this.$router.push({name: "home"});
          // let token = await data.user.getIdToken();
          // this.user.setTokens(token);
          // onValue(ref(database, "users"), (snapshot) => {
          //   snapshot.forEach((child) => {
          //     if (data.user.uid === child.val().id) {
          //       const db = getDatabase();
          //       set(ref(db, 'users/' + child.key), {
          //         email: child.val().email,
          //         id: child.val().id,
          //         name: child.val().name,
          //         token: token,
          //       });
          //       this.user.addUser(child.val());
          //     }
          //   });
          // });
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
    },
  },
});
</script>

<style scoped></style>
