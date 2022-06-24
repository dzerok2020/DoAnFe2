<script setup>
import { ref, onMounted, onUpdated, reactive, watch, computed } from "vue";
import { getAuth } from "firebase/auth";
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

const keyWord = ref("");
// const closeBox = ref(false);
const arrFriends = ref([]);
// const emit = defineEmits(["toggle", "closed"]);
// const props = defineProps(["close"]);
// const propClose = computed(() => props.close);
const reactiveUser = reactive({
  data: []
});
const userList = reactive({
  data: []
});
// methods'

function logout() {
  getAuth(auth.app).signOut();
  const users = useUsersStore();
  users.logout();
  router.push({ name: props.nameRouterSettings });
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
    var arr = [];
    var id = [];
    snapshot.forEach((element) => {
      arr.push({
        name: element.val().name,
        id: element.val().id
      });
    });
    reactiveUser.data = arr;
  });
}

function getAllFriend() {
  console.log("ducucu");
  const db = getDatabase();
  // console.log(db);
  const uid = getAuth().currentUser?.uid;

  const mostViewedPosts = query(
    ref1(db, "users/" + uid),
    orderByChild("friend")
  );

  const dbRef = ref1(getDatabase());

  var arrFriend = [];
  var arrID = [];

  //Lấy arr id friend
  onValue(mostViewedPosts, async (snapshot) => {
    arrID = snapshot.val()?.friend || [];
    for (let i = 0; i < arrID.length; i++) {
      //Lấy ra dữ liệu dựa vào id đã có
      console.log("iuagwdugawdg");
      const snapshot = await get(child(dbRef, "users/" + arrID[i]));
      if (snapshot.exists()) {
        // arrFriend.push(snapshot.val());
        console.log(snapshot.val());
        reactiveUser.data.push(snapshot.val());
      } else {
        console.log("No data available");
      }
    }
    console.log(arrID);
    // reactiveUser.data = arrFriend;
  });
}

function addFriend(data) {
  //id người kết bạn
  // console.log(data);
  const db = getDatabase();
  const uid = getAuth().currentUser?.uid;
  // console.log(uid);

  const dbRef = ref1(getDatabase());

  var arrFriend = [];
  //Add id của bạn vào Firebase Realtime của mình
  get(child(dbRef, "users/" + uid))
    .then((snapshot) => {
      if (snapshot.exists()) {
        arrFriend = snapshot.val().friend || [];
        // console.log({ data, arrFriend2 });

        set(ref1(db, "users/" + uid), {
          email: snapshot.val().email,
          name: snapshot.val().name,
          id: snapshot.val().id,
          token: snapshot.val().token,
          friend: [...[data], ...arrFriend]
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  arrFriend = [];
  // //Add id của mình vào Firebase Realtime của bạn
  get(child(dbRef, "users/" + data))
    .then((snapshot) => {
      if (snapshot.exists()) {
        arrFriend = snapshot.val().friend || [];
        // console.log({ data, arrFriend2 });

        set(ref1(db, "users/" + data), {
          email: snapshot.val().email,
          name: snapshot.val().name,
          id: snapshot.val().id,
          token: snapshot.val().token,
          friend: [...[uid], ...arrFriend]
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

onMounted(() => {
  getAllFriend();
});

watch(reactiveUser, (n) => {
  if (n.data.length > 0) {
    userList.data = n.data;
  }
});

// watch(propClose, (n) => {
//   console.log(n);
//   if (n) {
//     // console.log("da vo");
//     // closeBox.value = true;
//   }
// });
</script>
// //
<template>
  <div class="box-bg-friend tap">
    <div class="box-form">
      <div
        v-for="(i, index) in userList.data"
        :key="index"
        class="box-form-nameicon"
      >
        <div>{{ i.name }}</div>
        <div style="align-items: center; display: flex">
          <button
            @click="addFriend(i.id)"
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
            Friend
          </button>
          <v-icon name="bi-star-fill" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
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
        // padding: 10px;
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
</style>
