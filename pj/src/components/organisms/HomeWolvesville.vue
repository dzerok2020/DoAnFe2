<template>
  <div class="grid grid-rows-4 gap-4">
    <ad-image
      src="https://www.wolvesville.com/static/media/logo_text.a219eb8e.png"
      alt="logo"
      class="w-1/2 mx-auto self-end align-bottom"
    />
    <div class="row-span-2 self-center">
      <home-control />
    </div>
    <div class="align-bottom mx-auto">
      <icon-event />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HomeControl from "@/components/molecules/HomeControl.vue";
import AdImage from "@/components/atoms/AdImage.vue";
import IconEvent from "@/components/molecules/IconEvent.vue";
</script>

<style scoped></style>