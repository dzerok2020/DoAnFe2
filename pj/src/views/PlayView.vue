<template>
  <div id="play" class="bg-black/10 bg-background-Play">
    <div class="flex flex-row h-screen p-4">
      <div class="basis-3/10 mr-4">
        <div class="flex flex-col h-full">
          <div class="basis-1/20 relative">
            <div
              class="grid grid-cols-2 bg-gray-100 py-1 mb-2 rounded border border-gray-300"
            >
              <div class="my-auto px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="w-5 h-5 cursor-pointer"
                  @click="$router.push({ name: 'home' })"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                  />
                </svg>
              </div>
              <div class="justify-self-end my-auto px-4 pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-5 h-5 inline-block mr-3"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  class="w-5 h-5 inline-block"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="basis-3/20 mb-4">
            <div
              class="grid grid-cols-8 gap-4 bg-gray-100 p-2 mt-4 border border-gray-300 rounded text-center"
            >
              <div>
                <image-text
                  classes-text="text-x"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_doctor_filled.20fa62bd.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_detective_filled.6f58542f.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_medium_filled.e98c822c.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_jailer_filled.88903f5b.svg  "
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_aura_seer_filled.0dfd01b6.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_beast_hunter_filled.8f57b3aa.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_vigilante_filled.040b4792.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_flower_child_filled.2baaf5b4.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_cursed_human_filled.4175d58f.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_loudmouth_filled.0ea71366.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_junior_werewolf_filled.118d63fe.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_alpha_werewolf_filled.74166752.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_nightmare_werewolf_filled.eb9ba67a.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_wolf_seer_filled.06e1f433.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_fool_filled.ab621444.svg"
                />
              </div>
              <div>
                <image-text
                  classes-text="text-x truncate"
                  label="Arsonist"
                  src="https://www.wolvesville.com/static/media/icon_arsonist_filled.a1b7f7f3.svg"
                />
              </div>
            </div>
          </div>
          <div class="basis-4/5 bg-cyan-500">
            <chat-view :username="user.data.name" />
          </div>
        </div>
      </div>
      <div class="basis-7/10">
        <div class="flex flex-col h-full">
          <div class="basis-9/10">
            <div class="grid grid-cols-4 grid-rows-4 gap-2 h-full w-full">
              <div class="bg-sky-400 rounded" v-for="i in users" :key="i">
                <div
                  class="bg-background-Play-User bg-cover bg-no-repeat bg-bottom rounded h-full relative"
                >
                  <PlayUser
                    src-user="https://cdn-avatars.wolvesville.com/1e98c23e-b356-4e41-b2d1-a81ae403772f@2x.png"
                    src-role="https://www.wolvesville.com/static/media/icon_doctor_filled.20fa62bd.svg"
                    :label="i.name"
                    class-img-user="absolute w-24 absolute left-1/2 transform -translate-x-1/2 bottom-0.5"
                    class-img-role="absolute w-8 bottom-0.5 right-0"
                    classes-label="absolute left-1/2 transform -translate-x-1/2 top-1.5 text-white bg-black/40 px-4 py-0.5 rounded"
                  />
                </div>
              </div>

              <div class="bg-sky-400 rounded" v-for="i in (16 - users.length)">
                <div
                    class="bg-background-Play-User bg-cover bg-no-repeat bg-bottom rounded h-full relative"
                >
                  <PlayUser
                      src-user=""
                      src-role=""
                      label=""
                      class-img-user="absolute w-24 absolute left-1/2 transform -translate-x-1/2 bottom-0.5"
                      class-img-role="absolute w-8 bottom-0.5 right-0"
                      classes-label="absolute left-1/2 transform -translate-x-1/2 top-1.5 text-white bg-black/40 px-4 py-0.5 rounded"
                  />
                </div>
              </div>

            </div>
          </div>
          <div class="basis-1/10">
            <div class="flex flex-row justify-center items-center h-full gap-4">
              <div
                class="border-4 border-gray-500 bg-gray-200 p-3 rounded-full"
              >
                <ad-image
                  src="https://www.wolvesville.com/static/media/loudmouth_select.c6c53966.png"
                  classes="w-8 h-8"
                />
              </div>
              <div
                class="border-4 border-gray-500 bg-gray-200 p-3 rounded-full"
              >
                <ad-image
                  src="https://www.wolvesville.com/static/media/inventory_tab_rose_packages.23c42fdb.png"
                  classes="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ImageText from "@/components/molecules/ImageText.vue";
import PlayUser from "@/components/molecules/PlayUser.vue";
import AdImage from "@/components/atoms/AdImage.vue";
import ChatView from "@/views/ChatView.vue";
import { defineComponent} from "vue";
import { useUsersStore } from "@/store/users";
import {database, onValue, ref} from "@/firebase";
import {getDatabase, set} from "firebase/database";

export interface time {
  timer: number;
  totalTime: number;
}

export default defineComponent({
  components: {
    ImageText,
    PlayUser,
    AdImage,
    ChatView,
  },
  data() {
    return {
      user: useUsersStore(),
      users: [{}],
      slots: [0, 1, 2, 3],
      time: {
        timer: 0,
        totalTime: 20 * 60,
      },
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      const db = getDatabase();
      const starCountRef = ref(db, `play-${this.user.room}`);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        this.users.push(data);
      });
      onValue(ref(database, "play-" + this.user.room), (snapshot) => {
        this.users = [];
        snapshot.forEach((child) => {
          if (child.key !== "message"){
            this.users.push(child.val());
          }
        });
      });
    },
    startTimer: function () {
      this.time.timer = setInterval(() => this.countdown(), 1000);
    },
    stopTimer: function () {
      clearInterval(this.time.timer);
      this.time.timer = 0;
    },
    resetTimer: function () {
      clearInterval(this.time.timer);
      this.time.totalTime = 20 * 60;
      this.time.timer = 0;
    },
    padTime: function (time: number) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function () {
      this.time.totalTime--;
    },
  },
});
</script>
