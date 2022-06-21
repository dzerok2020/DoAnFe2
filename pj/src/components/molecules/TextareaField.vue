<template>
  <div class="ml-textarea-field">
    <ad-text tag="label" class="ml-label" :for="id">{{ label }}</ad-text>
    <ad-textarea
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :class="classes"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import AdText from "@/components/atoms/AdText.vue";
import AdTextarea from "@/components/atoms/AdTextarea.vue";

defineProps({
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
</script>
