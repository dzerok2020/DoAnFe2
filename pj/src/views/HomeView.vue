<template>
  <div id="main" class="bg-sky-500/50 h-screen text-white">
    <div class="bg-background-Home h-full">
      <div class="pt-2">
        <home-seting
            :label-coin="user.data.coin"
            :label-gem="user.data.gem"
            :label-rose="user.data.flower"
            name-router-settings="login"
        />
      </div>
      <profile-season :name="user.data.name" />
      <ad-row co-ls="3" class="h-full text-black">
        <ad-row>
          <home-wolvesville />
        </ad-row>
        <ad-row> a </ad-row>
      </ad-row>
    </div>
  </div>
</template>

<script lang="ts">
import AdRow from "@/components/atoms/AdRow.vue";
import HomeWolvesville from "@/components/organisms/HomeWolvesville.vue";
import ProfileSeason from "@/components/organisms/ProfileSeason.vue";
import HomeSeting from "@/components/organisms/HomeSeting.vue";
import { defineComponent } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUsersStore } from "@/store/users";
import { database, onValue, push, ref } from "@/firebase";
import { child, get, getDatabase, set } from "firebase/database";


export default defineComponent({
  components: {
    AdRow,
    HomeWolvesville,
    ProfileSeason,
    HomeSeting
  },
  data() {
    return {
      auth: getAuth(),
      user: useUsersStore(),
    };
  },
  created() {
    window.addEventListener("beforeunload", this.deleteUserInRoom);
    console.log("123");
  },
  mounted() {
    console.log("333");
    // this.getMessage();
    this.deleteUserInRoom();
  },
  methods: {
    test() {
      console.log("test1");
    },
    async deleteUserInRoom() {
      console.log(this.auth.currentUser?.uid);
      const dbRef = ref(getDatabase());
      const db = getDatabase();
      get(child(dbRef, `play-${this.user.room}/${this.user.data.id}`))
        .then(async (snapshot) => {
          if (snapshot.exists()) {
            await set(
              ref(db, `play-${this.user.room}/${this.user.data.id}`),
              {}
            );
            return;
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      get(child(dbRef, `play-${this.user.room}`))
        .then(async (snapshot) => {
          if (snapshot.exists()) {
            if (snapshot.size == 2 && snapshot.child("message").exists()) {
              await set(ref(db, `play-${this.user.room}`), {});
            }
            return;
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // getMessage() {
    //   if (this.user.token) {
    //     const db = getDatabase();
    //     console.log('home: ' + this.user.token);
    //     onValue(ref(database, `play-${this.user.room}`), (snapshot) => {
    //       if (snapshot.size > 1) {
    //         snapshot.forEach((child) => {
    //           console.log(this.user.data.id)
    //           if (this.user.data.id === child.val().id) {
    //             set(ref(db, snapshot.key + "/" + child.key), {
    //             });
    //             this.user.room = -1;
    //             snapshot.exists()
    //           }
    //         });
    //       } else {
    //         console.log('asds')
    //         // set(ref(db, snapshot.key + "/"), {
    //         // });
    //       }
    //     });
    //   }
    // },
  }
});
</script>

<style scoped></style>
