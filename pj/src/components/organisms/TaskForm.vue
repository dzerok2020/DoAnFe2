<template>
  <ad-text tag="h1">New Task</ad-text>
  <form @submit.prevent="onSubmit">
    <InputField v-model="formData.title" />
    <TextareaField label="Description" v-model="formData.description" />
    <SelectField
      label="Priority"
      v-model="formData.priority"
      :options="options"
    />
    <ad-button type="submit">Create</ad-button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import AdText from "@/components/atoms/AdText.vue";
import InputField from "@/components/molecules/InputField.vue";
import TextareaField from "@/components/molecules/TextareaField.vue";
import SelectField from "@/components/molecules/SelectField.vue";
import AdButton from "@/components/atoms/AdButton.vue";

import { useTask } from "@/users/useTask";

const { createNewTask } = useTask();

const formData = reactive({
  title: "",
  description: "",
  priority: "Normal",
});
const options = [
  {
    label: "Low",
    value: "Low",
  },
  {
    label: "Normal",
    value: "Normal",
  },
  {
    label: "High",
    value: "High",
  },
];

function onSubmit() {
  createNewTask(formData);
}
</script>
