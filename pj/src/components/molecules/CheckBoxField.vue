<template>
  <ad-input
    type="checkbox"
    :id="id"
    :name="name"
    :class="classes"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.checked)"
  />
  <ad-text tag="label" class="ml-label" :for="id">{{ label }}</ad-text>
</template>

<script setup lang="ts">
import AdText from "@/components/atoms/AdText.vue";
import AdInput from "@/components/atoms/AdInput.vue";

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
    type: Boolean,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
});
</script>
