<script lang="ts" setup>
import CoinRoseGem from "@/components/molecules/CoinRoseGem.vue";
import AdText from "@/components/atoms/AdText.vue";
import { ref, onMounted, onUpdated, reactive } from "vue";
import { getAuth, onAuthStateChanged, signOut, type Auth } from "firebase/auth";
import { useUsersStore } from "@/store/users";
import { database } from "@/firebase";
import {
  getDatabase,
  push,
  set,
  child,
  onValue,
  query,
  equalTo,
  orderByChild,
  onChildAdded,
  update,
  get
} from "firebase/database";
import { ref1 } from "@/import";

import bgFullsize from "../../assets/images/bg_fullSize.png";
import { useRouter } from "vue-router";

const router = useRouter();
const isLogin = ref(false);
const friendSearch = ref(false);
const closeFr = ref(false);

const keyWord = ref("");
const arrFriends = ref([]);

type User = {
  id: string;
  name: string;
  email: string;
  token: string;
}
const reactiveUser = reactive({
  data: [] as User[],
});

let auth: Auth;

// const = getAuth().

const props = defineProps({
  labelCoin: {
    type: String,
    default: ""
  },
  labelGem: {
    type: String,
    default: ""
  },
  labelRose: {
    type: String,
    default: ""
  },
  nameRouterShop: {
    type: String,
    default: ""
  },
  nameRouterSettings: {
    type: String,
    default: ""
  },
  nameRouterHelp: {
    type: String,
    default: ""
  }
});

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLogin.value = !!user;
  });
});

// methods'

function logout() {
  getAuth(auth.app).signOut();
  const users = useUsersStore();
  users.logout();
  router.push({ name: props.nameRouterSettings });
}
function toggleFriend() {
  if (friendSearch.value) {
    closeFr.value = true;
    setTimeout(() => {
      friendSearch.value = !friendSearch.value;
      closeFr.value = false;
    }, 1000);
  } else {
    friendSearch.value = !friendSearch.value;
  }
}

function searchKey() {
  var datos = [];
  const db = getDatabase();
  // console.log(db);
  const starCountRef = ref1(db, "users");

  const mostViewedPosts = query(
    ref1(db, "users"),
    orderByChild("name"),
    equalTo(keyWord.value)
  );

  onValue(mostViewedPosts, (snapshot) => {
    var arr: any[] = [];
    var id: any[] = [];
    snapshot.forEach((element) => {
      arr.push({
        name: element.val().name,
        id: element.val().id
      });
    });
    reactiveUser.data = arr;
  });
}

// function getAllFriend() {
//   var datos = [];
//   const db = getDatabase();
//   // console.log(db);
//   const starCountRef = ref1(db, "users");

//   const mostViewedPosts = query(ref1(db, "users"));

//   onValue(mostViewedPosts, (snapshot) => {
//     var arr: any[] = [];
//     var id: any[] = [];
//     snapshot.forEach((element) => {
//       arr.push({
//         name: element.val().name,
//         id: element.val().id
//       });
//     });
//     // reactiveUser.data = arr;
//     console.log(arr);
//   });
// }
const arr = [];

function addFriend(data: User) {
  //id người kết bạn
  // console.log(data);

  const db = getDatabase();
  const uid = getAuth().currentUser?.uid;
  // console.log(uid);

  const user = ref1(db, "users/" + uid);
  const dbRef = ref1(getDatabase());

  var arrFriend: any[] = [];

  get(child(dbRef, "users/" + uid))
    .then((snapshot) => {
      if (snapshot.exists()) {
        arrFriend = snapshot.val() || [];
        console.log({ data, arrFriend });

        set(ref1(db, "users/" + uid), {
          email: snapshot.val().email,
          name: snapshot.val().name,
          id: snapshot.val().id,
          token: snapshot.val().token,
          friend: [...[data], ...[arrFriend]]
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  get(child(dbRef, "users/" + data.id))
    .then((snapshot) => {
      if (snapshot.exists()) {
        arrFriend = snapshot.val() || [];
        console.log({ data, arrFriend });

        set(ref1(db, "users/" + data.id), {
          email: snapshot.val().email,
          name: snapshot.val().name,
          id: snapshot.val().id,
          token: snapshot.val().token,
          friend: [...[data], ...[arrFriend]]
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
</script>

<template>
  <div class="bg_fullsize" v-if="friendSearch">
    <div class="box-friend" :class="{ 'close-box-fiend': closeFr }">
      <div class="box-bg-friend">
        <v-icon
          @click="toggleFriend"
          style="display: block; height: 25px; width: 25px"
          name="pr-times"
        />
        <div class="search-form">
          <input
            type="text"
            class="icon_sreach"
            v-model="keyWord"
            placeholder="Tìm kiếm"
          />
          <v-icon name="fc-search" @click="searchKey" />
        </div>
        <div class="box-form">
          <div
            v-for="(i, index) in reactiveUser.data"
            :key="index"
            class="box-form-nameicon"
          >
            <div>{{ i.name }}</div>
            <div style="align-items: center; display: flex">
              <button
                @click="addFriend(i)"
                class="friend"
                style="
                  border: 1px solid blue;
                  color: blue;
                  padding: 2px;
                  margin-right: 5px;
                  font-weight: 200;
                  background: rgba(255, 255, 255, 0.774);
                "
              >
                Add Friend
              </button>
              <v-icon name="bi-star-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      <div
        class="bg-gray-900/50 w-fit px-5 py-2 rounded-md mx-3"
        style="cursor: pointer"
        @click="toggleFriend"
      >
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

<style lang="scss">
.bg_fullsize {
  position: fixed;
  inset: 0;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.377);
    z-index: -1;
  }

  .box-friend {
    position: absolute;
    width: 300px;
    top: 0;
    right: 0;
    bottom: 0;
    background: black;

    .box-bg-friend {
      position: absolute;
      z-index: 2;
      inset: 0;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.377);
        background-image: url(/src/assets/images/bg_fullSize.png);
        background-position: center;
        background-size: cover;
        filter: contrast(0.5);
        z-index: -1;
      }

      .search-form {
        display: flex;
        align-items: center;
        height: 40px;
        background: rgba(255, 255, 255, 0.774);

        input {
          flex: 1;
          background: transparent;
          outline: 0;
        }

        .icon_sreach {
          margin: 10px;
          width: 95%;
          color: black;
        }
      }

      .box-form {
        justify-content: baseline;
        width: 100%;
        height: calc(100vh - 65px);
        display: block;
        align-items: center;
        background: rgba(255, 255, 255, 0.3);
        overflow-y: auto;

        .box-form-nameicon {
          padding: 10px;
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid;
          display: flex;
          width: 100%;
          height: 40px;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
}

// .bg_fullsize:hover .box-friend {
//   animation: animationSiderIn 0.9s forwards;
// }

.bg_fullsize .box-friend {
  animation: animationSiderOut 0.9s backwards;
}

.bg_fullsize .box-friend.close-box-fiend {
  animation: animationSiderIn 0.9s forwards;
}

@keyframes animationSiderOut {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes animationSiderIn {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>

function addCommentElement(postElement: any, key: string|null, text: any,
author: any) { throw new Error("Function not implemented."); } function
addCommentElement(postElement: any, key: string|null, text: any, author: any) {
throw new Error("Function not implemented."); } function
postElement(postElement: any, key: string|null, text: any, author: any) { throw
new Error("Function not implemented."); }
