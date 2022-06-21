<template>
  <div class="place-self-center grid grid-cols-1 gap-6 place-items-center">
    <ad-button
      @click="play"
      type="submit"
      class="bg-background-Play border-2 text-2xl bg-pink-500 text-white px-20 py-2 font-bold rounded-md"
    >
      PLAY
    </ad-button>
    <ad-button
      @click="$router.push({ name: 'inventory' })"
      type="submit"
      class="bg-white text-lg px-8 py-2 font-semibold rounded-md"
    >
      INVENTORY
    </ad-button>
    <ad-button
      type="submit"
      class="bg-white px-8 py-2 font-semibold rounded-md"
    >
      SHOP
    </ad-button>
    <ad-button
      type="submit"
      class="bg-white px-8 py-2 font-semibold rounded-md"
    >
      CLAN
    </ad-button>
    <ad-button
      type="submit"
      class="bg-white px-7 py-2 font-semibold rounded-md"
    >
      ROLES
    </ad-button>
  </div>
</template>

<script lang="ts">
import AdButton from "@/components/atoms/AdButton.vue";
import {defineComponent} from "vue";
import {database, onValue, push, ref} from "@/firebase";
import {useUsersStore} from "@/store/users";
import {child, get, getDatabase, set} from "firebase/database";


export default defineComponent({
  components: {
    AdButton,
  },
  data() {
    return {
      user: useUsersStore(),
      room: 1,
    };
  },
  methods: {
    play: async function () {
      const db = getDatabase();
      let a: boolean = false;
      const starCountRef = ref(db, `play-${this.room}`);
      const dbRef = ref(getDatabase());
      while (!a) {
        a = await get(child(dbRef, `play-${this.room}`))
            .then(async (snapshot) => {
              let a = 4;
              if (snapshot.child('message')) {
                push(ref(database, `play-${this.room}/message`), {
                  username: this.user.data.name,
                  system: " join.",
                });
                a++;
              }
              if (snapshot.size < a) {
                await set(ref(db, `play-${this.room}/${this.user.data.id}`), {
                  name: this.user.data.name,
                  email: this.user.data.email,
                  room: this.room,
                  role: "",
                });
                this.user.room = this.room;
                await this.$router.push({name: 'play'})
                return true;
              } else {
                this.room++;
                return false;
              }
            })
      }

        // a = await get(child(dbRef, `play-${this.room}`))
        //     .then(async (snapshot) => {
        //       if (snapshot.size < 4) {
        //         await push(ref(database, `play-${this.room}`), {
        //           idUser: this.user.data.id,
        //           name: this.user.data.name,
        //           room: this.room,
        //           token: this.user.token,
        //         });
        //         this.user.room = this.room
        //         snapshot.exists()
        //         return true;
        //       } else {
        //         this.room++;
        //         console.log("No data available");
        //         return false;
        //       }
        //     })
        //     .catch((error) => {
        //       console.error(error);
        //     });
        // console.log(a);
      // }

      // await this.$router.push({name: 'play'})
    },
  },
});
</script>

<style scoped></style>
