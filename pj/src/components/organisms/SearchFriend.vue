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
  limitToLast
} from "firebase/database";
import { ref1 } from "@/import";
import bgFullsize from "../../assets/images/bg_fullSize.png";
import { v4 as uuidv4 } from "uuid";
import { useUsersStore } from "@/store/users";

const userStore = useUsersStore();

const keyWord = ref("");
// const closeBox = ref(false);
const arrFriends = ref([]);
// const emit = defineEmits(["toggle", "closed"]);
// const props = defineProps(["close"]);
// const propClose = computed(() => props.close);
const testData = reactive({ data: {} });
const reactiveUser = reactive({
  data: []
});
const userList = reactive({
  data: []
});
const arrIdType = reactive({
  data: []
});
const arrIdList = reactive({
  data: []
});
const db = getDatabase();
const dbRef = ref1(getDatabase());
const myId = userStore.getUserInfor?.id;
// methods'

function logout() {
  getAuth(auth.app).signOut();
  const users = useUsersStore();
  users.logout();
  router.push({ name: props.nameRouterSettings });
}

function searchKey() {
  var datos = [];
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

function getFriendLimit(limit = 5) {
  // console.log(db);
  const uid = getAuth().currentUser?.uid;

  const mostViewedPosts = query(ref1(db, "users"), limitToLast(limit));

  var getFriend = [];
  let arr = [];
  console.log(arrIdList.data);
  //Lấy arr id friend
  onValue(mostViewedPosts, async (snapshot) => {
    if (arrIdList.data) {
      arr = Object.entries(snapshot.val()).filter(
        (item) => !arrIdList.data.includes(item[0])
      );
      console.log("arr id dùng kiểm tra: " + arrIdList.data);
      reactiveUser.data = arr.map((e) => e[1]);
    } else {
      getFriend = Object.entries(snapshot.val()).map((item) => item[1]);
    }
    // reactiveUser.data = getFriend;
  });
}

async function notifyFriend(idNhan) {
  //id người kết bạn
  // console.log(data);
  const obj = userStore.getUserInfor;

  // const obj2 = { bool: false };

  // const obj = Object.assign({}, obj1, obj2);

  // const dbRef = ref1(getDatabase());
  const ramdomID = uuidv4().replace(/\-/g, "");

  set(ref1(db, "notyfi/" + ramdomID), {
    send: {
      ...obj
    },
    receive: idNhan,
    messege: userStore.getUserInfor?.name.toUpperCase() + " mình làm bạn nhé"
  });

  const ramdomIDFriend = uuidv4().replace(/\-/g, "");

  // await getStatus(db, userStore.getUserInfor?.id);
  console.log(testData.data);
  if (testData.data.id) {
    const changedata = testData.data.status;
    changedata.push({
      id: idNhan,
      stt: "...waiting"
    });
    set(ref1(db, "statusFriend/" + userStore.getUserInfor?.id), {
      id: userStore.getUserInfor?.id,
      status: changedata
    });
  } else {
    set(ref1(db, "statusFriend/" + userStore.getUserInfor?.id), {
      id: userStore.getUserInfor?.id,
      status: [
        {
          id: idNhan,
          stt: "...waiting"
        }
      ]
    });
  }
}

async function getStatus(db, id) {
  const mostViewedPosts = query(ref1(db, "statusFriend/" + id));
  onValue(mostViewedPosts, async (snapshot) => {
    if (snapshot.val()) {
      testData.data = snapshot.val();
    }
  });
}

async function getIdFriend(db, id) {
  const mostViewedPosts = query(ref1(db, "users/" + id));
  onValue(mostViewedPosts, async (snapshot) => {
    if (snapshot.val()) {
      arrIdType.data = snapshot.val().friend || [];
      console.log("Mảng ID cập nhật: " + arrIdType.data);
    }
  });
}

onMounted(async () => {
  await getIdFriend(db, userStore.getUserInfor?.id);
  getStatus(db, userStore.getUserInfor?.id);
});

watch(arrIdType, (n) => {
  if (n.data) {
    arrIdList.data = n.data;
    getFriendLimit();
  }
});

watch(reactiveUser, (n) => {
  if (n.data.length > 0) {
    userList.data = n.data;
  }
});

watch(testData, (n) => {
  console.log(n);
});
</script>
// //
<template>
  <div class="box-bg-friend tap">
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
      <template v-for="(i, index) in userList.data" :key="index">
        <div v-if="i.id !== myId" class="box-form-nameicon">
          <div>{{ i.name }}</div>
          <div style="align-items: center; display: flex">
            <button
              @click="notifyFriend(i.id)"
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
              {{
                testData.data.status?.find((e) => e.id === i.id)
                  ? "...waiting"
                  : "Add Friend"
              }}
            </button>
            <v-icon name="bi-star-fill" />
          </div>
        </div>
      </template>
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
