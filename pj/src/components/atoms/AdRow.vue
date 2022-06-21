<template>
  <div class="grid" :class="[numberCoLs, gapCoLs]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  coLs: {
    type: String,
    required: false,
    default: "1",
  },
  gap: {
    type: String,
    required: false,
    default: "4",
  },
  classes: {
    type: String,
    required: false,
  },
});

const numberCoLs = computed(() => `grid-coLs-${props.coLs}`);
const gapCoLs = computed(() => `gap-${props.gap}`);
</script>
