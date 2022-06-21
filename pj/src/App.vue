<script setup lang="ts">
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {database, onValue, ref} from "@/firebase";
import {child, get, getDatabase, set} from "firebase/database";
import {useRouter} from "vue-router";
import {useUsersStore} from "@/store/users";

const userStore = useUsersStore();
const router = useRouter();

onAuthStateChanged(getAuth(), async (user) => {
  if (user) {
    // userStore.token = await user.getIdToken();
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${user?.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        userStore.addUser(snapshot.val());
        // router.push({name: "home"});
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    await router.push({name: "home"});
  }else {
      await router.push({name: "login"});
    }

});
</script>

<template>
  <router-view></router-view>
</template>
