<template>
  <button :class="classes" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

type ButtonTypes = "button" | "submit" | "reset" | undefined;

defineProps({
  type: {
    type: String as PropType<ButtonTypes>,
    required: false,
    default: "button",
    validator: (value: string) => {
      const _buttonTypes = ["button", "submit", "reset"];
      return _buttonTypes.includes(value);
    },
  },
  classes: {
    type: String,
    required: false,
  },
});
</script>
