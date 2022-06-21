<template>
  <div
    class="grid grid-cols-4 gap-2 bg-gray-900/50 h-fit rounded-md py-3 text-white"
  >
    <div class="my-auto">
      <div
        class="bg-blue-400 h-fit w-fit p-2 rounded-full mx-auto self-center"
        v-if="checkFiled === 'true'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
      <ad-image :src="src" :alt="alt" :class="classesImage" v-else />
    </div>
    <div class="col-span-2">
      <div v-if="checkFiled === 'true'">
        <ad-text tag="span"> {{ labelName }} </ad-text>
        <div class="relative bg-gray-200 rounded-full">
          <div
            class="absolute bg-sky-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-4"
            style="width: 50%"
          ></div>
          <ad-text
            tag="span"
            class="absolute text-xs font-medium text-center text-black p-0.5 leading-none h-4"
            style="width: 100%"
          >
            100/200
          </ad-text>
          <div
            class="text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-4"
            style="width: 100%"
          ></div>
        </div>
      </div>
      <div :class="classesSeason" v-else>
        <ad-text tag="span" :class="classesText">
          {{ label }}
        </ad-text>
      </div>
    </div>
    <div class="relative">
      <text-image
        :label="label"
        :classes="classesDiv"
        :classes-text="classesText"
        :classes-image="classesImage"
        :alt="alt"
        :src="src"
        v-if="checkFiled === 'true'"
      />
      <div :class="classesSeason" v-else>
        <ad-text tag="span">
          {{ labelSeason }}
        </ad-text>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TextImage from "@/components/molecules/TextImage.vue";
import AdText from "@/components/atoms/AdText.vue";
import AdImage from "@/components/atoms/AdImage.vue";

defineProps({
  src: {
    type: String,
    required: false,
  },
  classesAvatar: {
    type: String,
    required: false,
  },
  classesDiv: {
    type: String,
    required: false,
  },
  classesImage: {
    type: String,
    required: false,
  },
  alt: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  nameRouter: {
    type: String,
    required: false,
  },
  classesText: {
    type: String,
    required: false,
  },
  checkFiled: {
    type: String,
    default: "true",
    required: false,
  },
  classesSeason: {
    type: String,
    required: false,
  },
  labelSeason: {
    type: String,
    required: false,
  },
  labelName: {
    type: String,
    required: false,
  },
});
</script>

<style scoped></style>
