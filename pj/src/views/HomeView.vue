<template>
  <div id="main" class="bg-sky-500/50 h-screen text-white">
    <div class="bg-background-Home h-full">
      <home-seting
          :label-coin="user.data.coin"
          :label-gem="user.data.gem"
          :label-rose="user.data.flower"
          name-router-settings="login"
      />
      <profile-season :name="user.data.name" />
      <ad-row co-ls="3" class="h-full text-black">
        <ad-row>
          <home-wolvesville />
        </ad-row>
        <ad-row>
          <div
              class="relative w-full h-full"
          >
            <div
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 skin w-full"
            >
              <div class="w-full h-full relative">
                <div
                    class="hair absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <ad-image
                      :src="user.data.skin.hair"
                  />
                </div>
                <div
                    class="eyes absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <ad-image
                      class="w-32"
                      :src="user.data.skin.eyes"
                  />
                </div>
                <div
                    class="mouth absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <ad-image
                      class="w-12"
                      :src="user.data.skin.mouth"
                  />
                </div>
                <div
                    class="head absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <ad-image
                      class="w-48"
                      :src="user.data.skin.head"
                  />
                </div>
                <div
                    class="clothes absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <ad-image
                      :src="user.data.skin.clothes"
                  />
                </div>
                <div
                    class="body absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
                >
                  <ad-image
                      class="scale-95"
                      :src="user.data.skin.body"
                  />
                </div>
                <div
                    class="hat absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <ad-image
                      class="w-96"
                      :src="user.data.skin.hat"
                  />
                </div>
              </div>
            </div>
          </div>
        </ad-row>
      </ad-row>
    </div>
  </div>
</template>

<script lang="ts">
import AdRow from "@/components/atoms/AdRow.vue";
import HomeWolvesville from "@/components/organisms/HomeWolvesville.vue";
import ProfileSeason from "@/components/organisms/ProfileSeason.vue";
import HomeSeting from "@/components/organisms/HomeSeting.vue";
import AdImage from "@/components/atoms/AdImage.vue";

import { defineComponent } from "vue";
import { getAuth } from "firebase/auth";
import { useUsersStore } from "@/store/users";
import { ref } from "@/firebase";
import { child, get, getDatabase, set } from "firebase/database";


export default defineComponent({
  components: {
    AdRow,
    AdImage,
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
  }
});
</script>

<style scoped></style>
