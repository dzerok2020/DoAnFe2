<template>
  <div class="w-screen h-screen bg-black/70 flex flex-col bg-background-Play">
    <div class="top relative basis-1/12 text-white">
      <div
        class="absolute top-2 back z-1 py-2 px-4 ml-4 bg-black/50 rounded-md text-white cursor-pointer"
        @click="$router.push({ name: 'home' })"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-7 h-7 fill-white"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
          />
        </svg>
      </div>
      <div class="mt-2">
        <home-seting
          :label-coin="user.data.coin"
          :label-gem="user.data.gem"
          :label-rose="user.data.flower"
          class="top-4"
          name-router-settings="login"
        />
      </div>
    </div>
    <div class="bottom pt-2 pb-1 basis-11/12 h-full relative">
      <div class="absolute inset-0">
        <div class="scroll overflow-scroll h-full">
          <div class="grid grid-rows-3 px-6">
            <div
              class="grid grid-cols-4 gap-4 relative pb-4 after:absolute after:left-1/4 after:right-1/4 after:bottom-0 after:border-b-2 after:border-black/50 h-fit"
            >
              <div class="cursor-pointer relative">
                <img
                  class="rounded-md h-44 w-full"
                  src="https://www.wolvesville.com/static/media/random_item_sets_promotion.729cf2c0.jpg"
                  alt=""
                />
                <img
                  class="absolute left-1/4 w-fix-shop top-fix-shop"
                  src="https://www.wolvesville.com/static/media/banner_left_plain.0068a9ae.png"
                  alt=""
                />
                <span
                  class="absolute top-fix-shop left-1/2 transform -translate-x-1/2 text-white bg-shop px-10 font-bold"
                >
                  Outfits
                </span>
                <img
                  class="absolute w-fix-shop top-fix-shop right-1/4"
                  src="https://www.wolvesville.com/static/media/banner_right_plain.25975f7c.png"
                  alt=""
                />
              </div>
              <div class="cursor-pointer relative">
                <img
                  class="rounded-md h-44 w-full"
                  src="https://www.wolvesville.com/static/media/luv_outfits_promotion.d664b378.png"
                  alt=""
                />
                <img
                  class="absolute left-1/4 w-fix-shop top-fix-shop"
                  src="https://www.wolvesville.com/static/media/banner_left_plain.0068a9ae.png"
                  alt=""
                />
                <span
                  class="absolute top-fix-shop left-1/2 transform -translate-x-1/2 text-white bg-shop px-10 font-bold"
                >
                  Outfits
                </span>
                <img
                  class="absolute w-fix-shop top-fix-shop right-1/4"
                  src="https://www.wolvesville.com/static/media/banner_right_plain.25975f7c.png"
                  alt=""
                />
              </div>
              <div class="cursor-pointer relative">
                <img
                  class="rounded-md h-44 w-full"
                  src="https://www.wolvesville.com/static/media/starter_pack_promotion_shop.01b82243.jpg"
                  alt=""
                />
                <img
                  class="absolute left-1/4 w-fix-shop top-fix-shop"
                  src="https://www.wolvesville.com/static/media/banner_left_plain.0068a9ae.png"
                  alt=""
                />
                <span
                  class="absolute top-fix-shop left-1/2 transform -translate-x-1/2 text-white bg-shop px-10 font-bold"
                >
                  Outfits
                </span>
                <img
                  class="absolute w-fix-shop top-fix-shop right-1/4"
                  src="https://www.wolvesville.com/static/media/banner_right_plain.25975f7c.png"
                  alt=""
                />
              </div>
              <div class="cursor-pointer relative">
                <img
                  class="rounded-md h-44 w-full"
                  src="https://www.wolvesville.com/static/media/starter_pack_deluxe_promotion_shop.e36cbe21.jpg"
                  alt=""
                />
                <img
                  class="absolute left-1/4 w-fix-shop top-fix-shop"
                  src="https://www.wolvesville.com/static/media/banner_left_plain.0068a9ae.png"
                  alt=""
                />
                <span
                  class="absolute top-fix-shop left-1/2 transform -translate-x-1/2 text-white bg-shop px-10 font-bold"
                >
                  Outfits
                </span>
                <img
                  class="absolute w-fix-shop top-fix-shop right-1/4"
                  src="https://www.wolvesville.com/static/media/banner_right_plain.25975f7c.png"
                  alt=""
                />
              </div>
              <div class="col-span-4 flex flex-row gap-4 mx-auto">
                <div class="cursor-pointer relative">
                  <img
                    class="rounded-md h-44 w-full"
                    src="https://cdn.wolvesville.com/promos/sk@3x.jpg"
                    alt=""
                  />
                  <span
                    class="absolute top-0 left-0 right-0 text-center text-white bg-shop font-bold"
                  >
                    3 Days left
                  </span>
                </div>
                <div class="cursor-pointer relative">
                  <img
                    class="rounded-md h-44 w-full"
                    src="https://cdn.wolvesville.com/promos/firstmeet@3x.jpg"
                    alt=""
                  />
                  <span
                    class="absolute top-0 left-0 right-0 text-center text-white bg-shop font-bold"
                  >
                    4 Days left
                  </span>
                </div>
                <div class="cursor-pointer relative">
                  <img
                    class="rounded-md h-44 w-full"
                    src="https://cdn.wolvesville.com/promos/luciddream@3x.jpg"
                    alt=""
                  />
                  <span
                    class="absolute top-0 left-0 right-0 text-center text-white bg-shop font-bold"
                  >
                    5 Days left
                  </span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-6 gap-4 mx-40 h-fit mb-4 -mt-2">
              <div
                class="h-48 w-full bg-white rounded-md cursor-pointer relative"
                v-for="i in gem"
              >
                <span
                  class="absolute left-0 right-0 text-white text-center font-bold bg-gray-400 py-1 rounded-t-md"
                >
                  {{ i.quality }}
                </span>
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <img class="w-24" :src="i.img" alt="" />
                </div>
                <span
                  class="absolute bottom-0 left-0 right-0 text-white text-center font-bold bg-shop py-1 rounded-b-md"
                >
                  {{ i.price }}$
                </span>
              </div>
              <div
                class="h-48 w-full bg-white rounded-md cursor-pointer relative"
                v-for="i in coin"
              >
                <span
                  class="absolute left-0 right-0 text-white text-center font-bold bg-gray-400 py-1 rounded-t-md"
                >
                  {{ i.quality }}
                </span>
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <img class="w-24" :src="i.img" alt="" />
                </div>
                <span
                  class="absolute bottom-0 left-0 right-0 text-white text-center font-bold bg-shop py-1 rounded-b-md"
                >
                  {{ i.gem }}
                  <img
                    class="mb-1 w-5 inline-block"
                    src="https://www.wolvesville.com/static/media/gem_with_white_border.860fb41a.png"
                    alt=""
                  />
                </span>
              </div>
              <div
                class="h-48 w-full bg-white rounded-md cursor-pointer relative"
                v-for="i in treasureChest"
              >
                <span
                  class="absolute left-0 right-0 text-white text-center font-bold bg-gray-400 py-1 rounded-t-md"
                >
                  {{ i.quality }}
                </span>
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <img class="w-24" :src="i.img" alt="" />
                </div>
                <span
                  class="absolute bottom-0 left-0 right-0 text-white text-center font-bold bg-shop py-1 rounded-b-md"
                >
                  {{ i.gem }}
                  <img
                    class="mb-1 w-5 inline-block"
                    src="https://www.wolvesville.com/static/media/gem_with_white_border.860fb41a.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div
              class="grid grid-cols-4 gap-4 relative py-4 after:absolute after:left-1/4 after:right-1/4 after:top-0 after:border-t-2 after:border-black/50"
            >
              <div class="cursor-pointer relative">
                <img
                  class="rounded-md h-44 w-full"
                  src="https://www.wolvesville.com/static/media/auto_double_xp_promotion_shop.9528515b.jpg"
                  alt=""
                />
                <img
                  class="absolute left-1/4 w-fix-shop top-fix-shop"
                  src="https://www.wolvesville.com/static/media/banner_left_plain.0068a9ae.png"
                  alt=""
                />
                <span
                  class="absolute top-fix-shop left-1/2 transform -translate-x-1/2 text-white bg-shop px-1 font-bold"
                >
                  Auto double xp
                </span>
                <img
                  class="absolute w-fix-shop top-fix-shop right-1/4"
                  src="https://www.wolvesville.com/static/media/banner_right_plain.25975f7c.png"
                  alt=""
                />
              </div>
              <div class="cursor-pointer relative">
                <img
                  class="rounded-md h-44 w-full"
                  src="https://www.wolvesville.com/static/media/dark_mode_promotion.30c60be2.jpg"
                  alt=""
                />
                <img
                  class="absolute left-1/4 w-fix-shop top-fix-shop"
                  src="https://www.wolvesville.com/static/media/banner_left_plain.0068a9ae.png"
                  alt=""
                />
                <span
                  class="absolute top-fix-shop left-1/2 transform -translate-x-1/2 text-white bg-shop px-10 font-bold"
                >
                  Dark mode
                </span>
                <img
                  class="absolute w-fix-shop top-fix-shop right-1/4"
                  src="https://www.wolvesville.com/static/media/banner_right_plain.25975f7c.png"
                  alt=""
                />
              </div>
              <div class="cursor-pointer relative">
                <img
                  class="rounded-md h-44 w-full"
                  src="https://www.wolvesville.com/static/media/custom_games_promotion_shop.5beeb140.jpg"
                  alt=""
                />
                <img
                  class="absolute left-1/4 w-fix-shop top-fix-shop"
                  src="https://www.wolvesville.com/static/media/banner_left_plain.0068a9ae.png"
                  alt=""
                />
                <span
                  class="absolute top-fix-shop left-1/2 transform -translate-x-1/2 text-white bg-shop px-1 font-bold"
                >
                  Custom games
                </span>
                <img
                  class="absolute w-fix-shop top-fix-shop right-1/4"
                  src="https://www.wolvesville.com/static/media/banner_right_plain.25975f7c.png"
                  alt=""
                />
              </div>
              <div class="cursor-pointer relative">
                <img
                  class="rounded-md h-44 w-full"
                  src="https://www.wolvesville.com/static/media/gift_promotion_shop.729236b1.jpg"
                  alt=""
                />
                <img
                  class="absolute left-1/4 w-fix-shop top-fix-shop"
                  src="https://www.wolvesville.com/static/media/banner_left_plain.0068a9ae.png"
                  alt=""
                />
                <span
                  class="absolute top-fix-shop left-1/2 transform -translate-x-1/2 text-white bg-shop px-10 font-bold"
                >
                  Send a gift
                </span>
                <img
                  class="absolute w-fix-shop top-fix-shop right-1/4"
                  src="https://www.wolvesville.com/static/media/banner_right_plain.25975f7c.png"
                  alt=""
                />
              </div>
              <div
                class="cursor-pointer h-44 bg-sky-400 bg-background-Home bg-cover bg-no-repeat relative"
                v-for="i in shop.data"
                @click="toggleModal(i)"
              >
                <img
                  class="absolute left-1/4 w-fix-shop top-fix-shop"
                  src="https://www.wolvesville.com/static/media/banner_left_plain.0068a9ae.png"
                  alt=""
                />
                <span
                  class="absolute top-fix-shop left-1/2 transform -translate-x-1/2 text-white bg-shop px-14 font-bold"
                >
                  {{ i.gem }}
                  <img
                    class="w-4 mb-1 inline-block"
                    src="https://www.wolvesville.com/static/media/gem_with_white_border.860fb41a.png"
                    alt=""
                  />
                </span>
                <img
                  class="absolute w-fix-shop top-fix-shop right-1/4"
                  src="https://www.wolvesville.com/static/media/banner_right_plain.25975f7c.png"
                  alt=""
                />
                <img
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 h-28"
                  :src="i.img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- overlay -->
  <div
    v-if="modal"
    class="absolute before:backdrop-blur-3xl before:backdrop-invert before:bg-white/30 before:absolute before:w-screen before:h-screen inset-0  h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0"
  >
    <!-- modal -->
    <div
      class="relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg"
    >
      <!-- header -->
      <div class="px-4 py-3 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-600">Payment</h2>
      </div>

      <!-- body -->
      <div class="w-full p-3">
        Are you sure you want to pay the following amount?
      </div>

      <!-- footer -->
      <div
        class="absolute bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3"
      >
        <button
          @click="pay()"
          class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none"
        >
          Yes
        </button>
        <button
          @click="toggleModal({id: '', gem: '', img: ''})"
          class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none"
        >
          No
        </button>
      </div>
    </div>
  </div>

  <!-- overlay -->
  <div v-if="notify" class="before:backdrop-blur-3xl before:backdrop-invert before:bg-white/30 before:fixed before:top-0 before:w-screen before:h-screen w-screen h-screen fixed top-0">
    <div
        id="popup-modal"
        tabindex="-1"
        class="fixed top-1/2 left-1/2 transform translate-x-1/3 translate-y-1/3 z-50 md:inset-0 h-modal md:h-full"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="p-6 text-center">
            <svg
                class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              You don't have enough gems to buy!!!
            </h3>
            <button
                @click="toggleModal1"
                data-modal-toggle="popup-modal"
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import HomeSeting from "@/components/organisms/HomeSeting.vue";
import { getDatabase, child, get, set, push } from "firebase/database";
import { reactive, ref } from "vue";
import { ref1 } from "@/import";
import { useUsersStore } from "@/store/users";

const gem = [
  {
    quality: 400,
    price: 3.22,
    img: "https://www.wolvesville.com/static/media/gem_pile_1.16b0f75c.svg",
  },
  {
    quality: 820,
    price: 6.45,
    img: "https://www.wolvesville.com/static/media/gem_pile_2.da2a3144.svg",
  },
  {
    quality: 1700,
    price: 12.92,
    img: "https://www.wolvesville.com/static/media/gem_pile_3.71387c26.svg",
  },
  {
    quality: 3600,
    price: 26.92,
    img: "https://www.wolvesville.com/static/media/gem_pile_4.4a1c6d57.svg",
  },
  {
    quality: 7300,
    price: 53.85,
    img: "https://www.wolvesville.com/static/media/gem_pile_5.60890cab.svg",
  },
  {
    quality: 15000,
    price: 107.71,
    img: "https://www.wolvesville.com/static/media/gem_pile_6.e6d0a420.svg",
  },
];
const coin = [
  {
    quality: 600,
    gem: 450,
    img: "https://www.wolvesville.com/static/media/gold_pile_1.bf8eff7e.svg",
  },
  {
    quality: 5000,
    gem: 3400,
    img: "https://www.wolvesville.com/static/media/gold_pile_4.44ee0b74.svg",
  },
  {
    quality: 15000,
    gem: 9000,
    img: "https://www.wolvesville.com/static/media/gold_pile_6.34e08d02.svg",
  },
];
const treasureChest = [
  {
    quality: 3,
    gem: 320,
    img: "https://www.wolvesville.com/static/media/loot_box_icon.65f3a9ad.svg",
  },
  {
    quality: 30,
    gem: 2600,
    img: "https://www.wolvesville.com/static/media/loot_box_icon.65f3a9ad.svg",
  },
  {
    quality: 100,
    gem: 7400,
    img: "https://www.wolvesville.com/static/media/loot_box_icon.65f3a9ad.svg",
  },
];
const modal = ref(false);
const notify = ref(false);
const user = useUsersStore();

type Shop = {
  id: string;
  gem: string;
  img: string;
};
const tmpShop = reactive({ data: {} as Shop });

const shop = reactive({ data: [] as Shop[] });

const dbRef = ref1(getDatabase());
get(child(dbRef, `shop/hat`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      shop.data = snapshot.val() as Shop[];
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

function toggleModal(shop: Shop) {
  if (!modal.value) {
    tmpShop.data = shop;
  }
  modal.value = !modal.value;
}
function toggleModal1() {
  notify.value = !notify.value;
}

function pay() {
  modal.value = false;
  console.log(tmpShop.data.gem, user.data.gem);
  if (+user.data.gem >= +tmpShop.data.gem) {
    user.data.gem = String(+user.data.gem - +tmpShop.data.gem);
    const ref = child(dbRef, `inventories/${user.data.id}/hats`);
    const refUpdate = child(dbRef, `users/${user.data.id}`);
    const data = {
      id: tmpShop.data.id,
      img: tmpShop.data.img,
    };
    set(refUpdate, user.data);
    push(ref, data);
  } else {
    notify.value = true;
    console.log("not enough gem");
  }
}
</script>

<style scoped></style>
