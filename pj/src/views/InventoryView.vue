<template>
  <div class="w-screen h-screen bg-black/70 flex flex-col bg-background-Play">
    <div class="top relative basis-1/12 text-white">
      <div
        class="absolute top-2 back z-10 py-2 px-4 ml-4 bg-black/50 rounded-md text-white cursor-pointer"
        @click="$router.push({ name: 'home'})"
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
          label-coin="685"
          label-gem="0"
          label-rose="87"
          class="top-4"
          name-router-settings="login"
        />
      </div>
    </div>
    <div class="bottom pt-2 pb-1 px-6 basis-11/12 bg-cyan-500">
      <div class="flex flex-row h-full">
        <div class="basis-1/3 grow">
          <div class="flex flex-col h-full bg-sky-500/50">
            <div
              class="basis-7/12 bg-background-Home bg-cover bg-no-repeat rounded-md relative"
            >
              <div
                class="absolute bottom-2 left-1/2 transform -translate-x-1/2 skin h-60 w-48"
              >
                <div class="h-full relative">
                  <div
                    class="hair absolute bottom-15 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <ad-image
                      class="scale-150"
                      src="https://cdn.wolvesville.com/avatarItems/hair-2.avatar-large@2x.png"
                    />
                  </div>
                  <div
                    class="eyes absolute bottom-14 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <ad-image
                      class="w-12 scale-150"
                      src="https://cdn.wolvesville.com/avatarItems/eyes-standard.avatar-large@2x.png"
                    />
                  </div>
                  <div
                    class="mouth absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <ad-image
                      class="w-5 scale-150"
                      src="https://cdn.wolvesville.com/avatarItems/mouth-skin-2.avatar-large@2x.png"
                    />
                  </div>
                  <div
                    class="head absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <ad-image
                      class="w-20 scale-150"
                      src="https://cdn.wolvesville.com/avatarItems/head-skin-2.avatar-large@2x.png"
                    />
                  </div>
                  <div
                    class="clothes absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <ad-image
                      class="scale-150"
                      src="https://cdn.wolvesville.com/avatarItems/clothes-77.avatar-large@2x.png"
                    />
                  </div>
                  <div
                    class="body absolute bottom-8 left-1/2 transform -translate-x-1/2 z-0"
                  >
                    <ad-image
                      class="w-20 scale-150"
                      src="https://cdn.wolvesville.com/avatarItems/body-skin-2.avatar-large@2x.png"
                    />
                  </div>
                  <div class="hat absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
                    <ad-image
                        class="scale-125"
                        src="https://cdn.wolvesville.com/avatarItems/hat-1.avatar-large@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="basis-5/12 bg-white rounded mt-4 h-full">
              <div class="flex flex-col h-full">
                <div class="basis-1/12">
                  <div class="top text-center p-2">
                    <ad-text tag="span"> Avatars </ad-text>
                  </div>
                </div>
                <div class="basis-11/12">
                  <div class="bottom h-full relative">
                    <div class="absolute inset-0">
                      <div class="scroll overflow-scroll h-full">
                        <div class="grid grid-cols-4 gap-4 px-2">
                          <div
                            v-for="i in 100"
                            :key="i"
                            class="basis-25/2 bg-sky-500/50 bg-background-Home bg-cover bg-no-repeat border-2 border-sky-900 rounded-md text-white h-20 w-28 relative"
                          >
                            <div class="relative h-full w-full">
                              <div
                                class="hair absolute bottom-4.5 left-1/2 transform -translate-x-1/2 z-20"
                              >
                                <ad-image
                                  class="w-10"
                                  src="https://cdn.wolvesville.com/avatarItems/hair-2.avatar-large@2x.png"
                                />
                              </div>
                              <div
                                class="eyes absolute bottom-5.5 left-1/2 transform -translate-x-1/2 z-20"
                              >
                                <ad-image
                                  class="w-5"
                                  src="https://cdn.wolvesville.com/avatarItems/eyes-standard.avatar-large@2x.png"
                                />
                              </div>
                              <div
                                class="mouth absolute bottom-5.5 left-1/2 transform -translate-x-1/2 z-20"
                              >
                                <ad-image
                                  class="w-2"
                                  src="https://cdn.wolvesville.com/avatarItems/mouth-skin-2.avatar-large@2x.png"
                                />
                              </div>
                              <div
                                class="head absolute bottom-5.5 left-1/2 transform -translate-x-1/2 z-10"
                              >
                                <ad-image
                                  class="w-8"
                                  src="https://cdn.wolvesville.com/avatarItems/head-skin-2.avatar-large@2x.png"
                                />
                              </div>
                              <div
                                class="clothes absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10"
                              >
                                <ad-image
                                  src="https://cdn.wolvesville.com/avatarItems/clothes-77.avatar-large@2x.png"
                                />
                              </div>
                              <div
                                class="body absolute bottom-1 left-1/2 transform -translate-x-1/2 z-0"
                              >
                                <ad-image
                                  src="https://cdn.wolvesville.com/avatarItems/body-skin-2.avatar-large@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-2/3 flex-none bg-cyan-50 h-full">
          <div class="flex flex-col h-full">
            <div class="basis-1/20 bg-cyan-100">
              <div class="grid grid-cols-2 py-1 h-full">
                <div
                  class="justify-self-center self-center font-bold uppercase"
                >
                  Avatar
                </div>
                <div
                  class="justify-self-center self-center font-bold uppercase"
                >
                  Items
                </div>
              </div>
            </div>
            <div class="basis-1/20">
              <div class="flex justify-around py-1 h-full">
                <div class="self-center">Bia mộ</div>
                <div class="self-center text-sky-400">Mũ</div>
                <div class="self-center">Tóc</div>
                <div class="self-center">Mắt kính</div>
                <div class="self-center">Áo</div>
                <div class="self-center">Mắt</div>
                <div class="self-center">Môi</div>
                <div class="self-center">Mặt nạ</div>
                <div class="self-center">Trang chí 1</div>
                <div class="self-center">Trang chí 2</div>
                <div class="self-center">Trang chí 3</div>
              </div>
            </div>
            <div class="basis-9/10 bg-gray-200/50 relative">
              <div class="absolute inset-0">
                <div class="scroll overflow-scroll h-full">
                  <div class="grid grid-cols-8 gap-4 px-4">
                    <div
                      class="basis-25/2 bg-gray-400/50 border-2 border-sky-900 h-full w-full rounded-md relative"
                    >
                      <div
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <ad-text tag="span"> None </ad-text>
                      </div>
                    </div>
                    <div
                      class="basis-25/2 bg-gray-400/50 border-2 border-sky-900 rounded-md p-4"
                    >
                      <ad-image
                        classes="h-12 mx-auto"
                        src="https://cdn.wolvesville.com/avatarItems/hat-1.store@2x.png"
                      />
                    </div>
                    <div
                      class="basis-25/2 bg-gray-400/50 border-2 border-sky-900 rounded-md p-4 text-white relative"
                    >
                      <ad-image
                        classes="h-12 mx-auto"
                        src="https://cdn.wolvesville.com/avatarItems/petfashion-hat-husky.store@2x.png"
                      />
                      <text-image
                        classes="absolute bottom-0 right-1"
                        label="70"
                        classes-text="text-xs"
                        classes-image="w-3 inline-block ml-1"
                        src="https://www.wolvesville.com/static/media/gem.439d7650.png"
                        alt="gem"
                        @click="$router.push({ name: nameRouterShop })"
                      />
                    </div>
                    <div
                      v-for="i in 130"
                      :key="i"
                      class="basis-25/2 bg-gray-400/50 border-2 border-sky-900 rounded-md p-4 text-white relative"
                    >
                      <ad-image
                        classes="h-12 mx-auto"
                        src="https://cdn.wolvesville.com/avatarItems/ineedlove-hat-female.store@2x.png"
                      />
                      <text-image
                        classes="absolute bottom-0 right-1"
                        label="170"
                        classes-text="text-xs"
                        classes-image="w-3 inline-block ml-1"
                        src="https://www.wolvesville.com/static/media/gem.439d7650.png"
                        alt="gem"
                        @click="$router.push({ name: nameRouterShop })"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeSeting from "@/components/organisms/HomeSeting.vue";
import AdImage from "@/components/atoms/AdImage.vue";
import AdText from "@/components/atoms/AdText.vue";
import TextImage from "@/components/molecules/TextImage.vue";
</script>

<style scoped></style>
