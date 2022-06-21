<template>
  <input
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :value="modelValue"
    @input="
      $emit(
        'update:modelValue',
        type === 'checked' ? $event.target.checked : $event.target.value
      )
    "
  />
</template>

<script setup lang="ts">
import type { PropType } from "vue";

type InputTypes =
  | "text"
  | "email"
  | "password"
  | "checkbox"
  | "radio"
  | undefined;

defineProps({
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
    type: [String, Boolean],
    required: false,
  },
});
</script>
