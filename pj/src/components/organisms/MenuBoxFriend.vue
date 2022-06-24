<script setup>
import { ref, onMounted, onUpdated, reactive, watch, computed } from "vue";
import Friend from "./Friend.vue";
import SearchFriend from "./SearchFriend.vue";
import FriendNotify from "./FriendNotify.vue";
import bgFullsize from "../../assets/images/bg_fullSize.png";

// const arrFriends = ref([]);
const emit = defineEmits(["toggle", "closed"]);
const props = defineProps(["close"]);
const propClose = computed(() => props.close);
const closeBox = ref(false);
// methods'
watch(propClose, (n) => {
  console.log(n);
  if (n) {
    console.log("da vo");
    closeBox.value = true;
  }
});

const arrComponent = reactive({
  data: [
    {
      name: " Bạn Bè",
      cpn: Friend
    },
    {
      name: "Tìm Bạn",
      cpn: SearchFriend
    },
    { name: "Thông Báo", cpn: FriendNotify }
  ]
});
const currentTab = ref(0);
function handleOnclick(value) {
  currentTab.value = value;
}

// export default {
//   components: {
//     Friend,
//     SearchFriend,
//     FriendNotify
//   },
//   data() {
//     return {
//       currentTab: "Friend",
//       tabs: ["Friend", "SearchFriend", "FriendNotify"]
//     };
//   }
// };
</script>
// //
<template>
  <div class="bg_fullsize" :class="{ 'close-box-fiend': closeBox }">
    <div class="close">
      <v-icon
        @click="$emit('toggle')"
        style="display: block; height: 25px; width: 25px"
        name="pr-times"
      />
      <div class="btn-menu">
        <template v-for="(i, index) in arrComponent.data" :key="index">
          <button
            class="btn-friend-menu"
            :class="{ 'btn-friend-menu-active': currentTab === index }"
            @click="handleOnclick(index)"
          >
            {{ i.name }}
          </button>
        </template>
      </div>
    </div>
    <div class="box-friend">
      <KeepAlive>
        <component :is="arrComponent.data[currentTab].cpn"></component>
      </KeepAlive>
    </div>
  </div>
</template>
<style lang="scss">
.bg_fullsize {
  position: fixed;
  z-index: 1;
  width: 300px;
  top: 0;
  right: 0;
  bottom: 0;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.377);
    z-index: -1;
  }
  .close {
    height: 30px;
    display: flex;
    align-items: center;
    background: #555;

    .btn-menu {
      flex: 1;
      text-align: center;

      .btn-friend-menu {
        border: 0;
        background: rgb(255 255 255 / 22%);
        padding: 0 8px;
        border-radius: 5px;
        margin: 0 1px;
      }

      .btn-friend-menu-active,
      .btn-friend-menu:hover {
        background: rgb(255 255 255 / 50%);
      }
    }
  }

  .box-friend {
    top: 30px;
  }
}

// .bg_fullsize:hover .box-friend {
//   animation: animationSiderIn 0.9s forwards;
// }

.bg_fullsize {
  animation: animationSiderOut 0.9s backwards;
}

.bg_fullsize.close-box-fiend {
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
  100% {
    transform: translateX(100%);
  }
  0% {
    transform: translateX(0%);
  }
}
</style>
