<template>
  <ad-text tag="span" :classes="classesLabel">
    {{ label }}
  </ad-text>
  <ad-image :src="srcUser" :classes="classImgUser" />
  <ad-image :src="srcRole" :classes="classImgRole" />
</template>

<script lang="ts" setup>
import AdText from "@/components/atoms/AdText.vue";
import AdImage from "@/components/atoms/AdImage.vue";

defineProps({
  srcUser: {
    type: String,
    default: "",
    required: false,
  },
  srcRole: {
    type: String,
    default: "",
    required: false,
  },
  classImgUser: {
    type: String,
    required: false,
  },
  classImgRole: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  classesLabel: {
    type: String,
    required: false,
  },
});
</script>
