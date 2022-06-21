<template>
  <img :src="src" :class="classes" :draggable="draggable" :alt="alt" />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: false,
  },
  draggable: {
    type: Boolean,
    default: false,
    required: false,
  },
  alt: {
    type: String,
    required: false,
  },
});
</script>
