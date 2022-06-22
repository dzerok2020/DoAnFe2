<template>
  <select
    :id="id"
    :name="name"
    :class="classes"
    :value="modelValue"
  >
    <option
      v-for="option in options"
      :key="JSON.stringify(option)"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

export type OptionTypes = {
  label: string;
  value: string;
};

defineProps({
  id: {
    type: String,
    required: false,
  },
  name: {
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
  options: {
    type: Array as PropType<OptionTypes[]>,
    required: true,
  },
});
</script>
