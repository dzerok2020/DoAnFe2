<template>
  <component :class="classes" :is="tag" :for="getForProp">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";

type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "label";

const props = defineProps({
  tag: {
    type: String as PropType<TextType>,
    required: true,
    default: "p",
    validator: (value: string) => {
      const _tagTypes = ["h1", "h2", "h3", "h4", "h5", "p", "span", "label"];
      return _tagTypes.includes(value);
    },
  },
  for: {
    type: String,
    required: false,
  },
  classes: {
    type: String,
    required: false,
  },
});

const getForProp = computed(() => (props.tag === "label" ? props.for : null));
</script>
