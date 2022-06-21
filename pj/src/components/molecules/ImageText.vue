<template>
  <div :class="classes">
    <ad-image :classes="classesImage" :src="src" :alt="alt" />
    <ad-text tag="p" :class="classesText">
      {{ label }}
    </ad-text>
  </div>
</template>

<script lang="ts" setup>
import AdImage from "@/components/atoms/AdImage.vue";
import AdText from "@/components/atoms/AdText.vue";

defineProps({
  src: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: false,
  },
  classesImage: {
    type: String,
    required: false,
  },
  classesText: {
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
});
</script>

<style scoped></style>
