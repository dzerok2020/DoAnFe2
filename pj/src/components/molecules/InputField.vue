<template>
  <ad-text tag="label" class="ml-label" :for="id">{{ label }}</ad-text>
  <ad-input
    :type="type"
    :id="id"
    :name="name"
    :class="classes"
    :value="modelValue"
  />
</template>

<script setup lang="ts">
import AdText from "@/components/atoms/AdText.vue";
import AdInput from "@/components/atoms/AdInput.vue";

import type { PropType } from "vue";
import { computed } from "vue";

type InputTypes =
  | "text"
  | "email"
  | "password"
  | "checkbox"
  | "radio"
  | undefined;

const props = defineProps({
  type: {
    type: String as PropType<InputTypes>,
    required: false,
    default: "text",
    validator: (value: string) => {
      const _inputTypes = ["text", "email", "password", "checkbox", "radio"];
      return _inputTypes.includes(value);
    },
  },
  id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  classes: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
});

// const getPlaceholderProp = computed(() =>
//   props.type !== "checkbox" && props.type !== "radio" ? props.placeholder : null
// );
</script>
