<template>
  <div class="ml-textarea-field">
    <ad-text tag="label" class="ml-label" :for="id">{{ label }}</ad-text>
    <ad-select
      :id="id"
      :name="name"
      :class="classes"
      :options="options"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import AdText from "@/components/atoms/AdText.vue";
import AdSelect from "@/components/atoms/AdSelect.vue";

import type { OptionTypes } from "@/components/atoms/AdSelect.vue";
import type { PropType } from "vue";

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
  label: {
    type: String,
    required: false,
  },
});
</script>
