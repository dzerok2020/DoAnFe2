<template>
  <div class="w-1/35 absolute inset-y-0 right-0 top-20 right-3">
    <profile-event
      label="28"
      src="https://www.wolvesville.com/static/media/rank_03.c0e2cb82.png"
      classes-text="absolute text-white mt-0.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      classes-image="w-1/2 inline-block"
      classes-div="text-center"
      :label-name="name"
    />
    <profile-event
      check-filed="false"
      src="https://cdn.wolvesville.com/battlePass/icons/bp24@2x.png"
      label="New battle pass available!"
      labelSeason="Season 24"
      classes-image="w-1/2 mx-auto"
      classes-season="flex items-center h-full mb-none"
      class="text-sm mt-4"
    />
  </div>
</template>

<script lang="ts">
import ProfileEvent from "@/components/molecules/ProfileEvent.vue";
import { defineComponent } from "vue";
import { useUsersStore } from "@/store/users";

export default defineComponent({
  components: {
    ProfileEvent,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: useUsersStore(),
    };
  },
});
</script>

<style scoped></style>
