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
  get,
  remove
} from "firebase/database";
import { ref1 } from "@/import";
import bgFullsize from "../../assets/images/bg_fullSize.png";
import { useUsersStore } from "@/store/users";
import { SiUnraid } from "oh-vue-icons/icons";

const userStore = useUsersStore();

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
const db = getDatabase();

// const notifyStatus = reactive({
//   isData: []
// });
// methods'

function logout() {
  getAuth(auth.app).signOut();
  const users = useUsersStore();
  users.logout();
  router.push({ name: props.nameRouterSettings });
}

//Load ra thông báo
async function getNotifyFriend() {
  const db = getDatabase();
  // console.log(db);
  const uid = getAuth().currentUser?.uid;

  const q = query(ref1(db, "notyfi"), orderByChild("receive"), equalTo(uid));

  const dbRef = ref1(getDatabase());

  const arrNotifyFriend = [];

  //Lấy arr id friend
  onValue(q, async (snapshot) => {
    console.log(":v");
    reactiveUser.data = [];
    // userList.data = [];
    if (snapshot.val()) {
      console.log("da vao");
      // console.log(snapshot.val());
      const arrNotify = Object.values(snapshot.val()).map((e) => e);
      // console.log(arrNotify);
      arrNotify.map(async (e) => {
        const snapshot = await get(child(dbRef, `users/${e.send.id}`));
        if (snapshot.exists()) {
          // arrNotifyFriend.push(snapshot.val());
          reactiveUser.data.push(snapshot.val());
        } else {
          console.log("No data available");
        }
      });
      // console.log("sasasasas");
      // for (let i = 0; i < arrNotify.length; i++) {
      //   console.log(arrNotify[i]);

      //   await get(child(dbRef, `users/${arrNotify[i].receive}`))
      //     .then((snapshot) => {
      //       if (snapshot.exists()) {
      //         arrNotifyFriend.push(snapshot.val());
      //       } else {
      //         console.log("No data available");
      //       }
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // }
    }
    // reactiveUser.data = arrNotifyFriend;
  });
}

//Add friend
async function addFriend(id) {
  console.log("an add");
  // console.log(db);
  const uid = getAuth().currentUser?.uid;

  const dbRef = ref1(getDatabase());
  //sưa lại trạng thái
  // updateStatus(db, id);

  console.log(userStore.getUserInfor?.id);
  console.log(id);

  var arrFriend = [];

  //thêm id vào bảng friend trên firebase
  get(child(dbRef, `users/${userStore.getUserInfor?.id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val().friend);
        arrFriend = snapshot.val().friend || [];
        set(ref1(db, "users/" + userStore.getUserInfor?.id), {
          email: snapshot.val().email,
          name: snapshot.val().name,
          id: snapshot.val().id,
          token: snapshot.val().token,
          friend: [...[id], ...arrFriend]
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  arrFriend = [];
  get(child(dbRef, `users/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val().friend);
        arrFriend = snapshot.val().friend || [];
        console.log(id);
        set(ref1(db, "users/" + id), {
          email: snapshot.val().email,
          name: snapshot.val().name,
          id: snapshot.val().id,
          token: snapshot.val().token,
          friend: [...[userStore.getUserInfor?.id], ...arrFriend]
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  const qStatusFriend = ref1(db, "statusFriend/" + userStore.getUserInfor?.id);
  //Xóa ptu trạng thái bảng statusFriend
  onValue(qStatusFriend, async (snapshot) => {
    // console.log(snapshot.val());
    const arrNotify = snapshot.val()?.status;
    // console.log(arrNotify);
    if (arrNotify) {
      const xoaIdStatus = arrNotify.filter((item) => item.id !== id);
      // console.log(a);
      set(ref1(db, "statusFriend/" + userStore.getUserInfor?.id), {
        id: userStore.getUserInfor?.id,
        status: xoaIdStatus
      });
    }
  });

  //Xóa thông báo khi đồng ý
  const qRemoveNotify = query(
    ref1(db, "notyfi"),
    orderByChild("receive"),
    equalTo(uid)
  );

  //Lấy arr id friend
  onValue(qRemoveNotify, async (snapshot) => {
    if (snapshot.val()) {
      const key = Object.entries(snapshot.val()).map((e) => e[0]);
      console.log(key[0]);

      set(ref1(db, "notyfi/" + key[0]), {});
      // remove(ref1(db), "notyfi/" + key[0]);
    }
  });

  // getNotifyFriend();
}

//Deny friend
function denyFriend(id) {
  // //Xóa thông báo khi đồng ý
  const qRemoveNotify = query(
    ref1(db, "notyfi"),
    orderByChild("receive"),
    equalTo(userStore.getUserInfor?.id)
  );

  //Lấy arr id friend
  onValue(qRemoveNotify, async (snapshot) => {
    if (snapshot.val()) {
      const key = Object.entries(snapshot.val()).map((e) => e[0]);
      console.log(key[0]);

      set(ref1(db, "notyfi/" + key[0]), {});
      // remove(ref1(db), "notyfi/" + key[0]);
    }
  });

  //xóa id status view
  const qStatusFriend = ref1(db, "statusFriend/" + id);
  //Xóa ptu trạng thái bảng statusFriend
  onValue(qStatusFriend, async (snapshot) => {
    // console.log(snapshot.val());
    const arrNotify = snapshot.val().status || [];
    if (arrNotify) {
      const xoaIdStatus = arrNotify.filter(
        (item) => item.id !== userStore.getUserInfor?.id
      );
      // console.log(a);
      set(ref1(db, "statusFriend/" + id), {
        id: id,
        status: xoaIdStatus
      });
    }
  });
}

onMounted(() => {
  getNotifyFriend();
});

// watch(reactiveUser, (n) => {
//   console.log(n);
//   if (n.data.length > 0) {
//     userList.data = n.data;
//     console.log(userList.data);
//   } else {
//     userList.data = [];
//   }
// });
</script>
// //
<template>
  <div class="box-bg-friend tap">
    <div class="box-form">
      <div
        v-for="(i, index) in reactiveUser.data"
        :key="index"
        class="box-form-nameicon"
      >
        <div>{{ i.name }} làm bạn nhé?</div>
        <div>
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
            Đồng ý
          </button>
          <button
            @click="denyFriend(i.id)"
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
            Từ chối
          </button>
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
