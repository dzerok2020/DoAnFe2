<template>
  <div class="flex flex-col-3">
    <text-image
        classes-image="w-5 inline-block ml-1"
        :label="labelCoin"
        src="https://www.wolvesville.com/static/media/silver_coin.7b125383.png"
        alt="silver_coin"
        @click="$router.push({ name: nameRouterShop })"
    />
    <text-image
        class="mx-4"
        classes-image="w-3 inline-block ml-1"
        :label="labelRose"
        src="https://www.wolvesville.com/static/media/rose_inventory_single.eb6af861.png"
        alt="rose_inventory_single"
    />
    <text-image
        :label="labelGem"
        classes-image="w-5 inline-block ml-1"
        src="https://www.wolvesville.com/static/media/gem.439d7650.png"
        alt="gem"
        @click="$router.push({ name: nameRouterShop })"
    />
  </div>
</template>

<script lang="ts" setup>
import TextImage from "@/components/molecules/TextImage.vue";
import AdRow from "@/components/atoms/AdRow.vue";

defineProps({
  labelCoin: {
    type: String,
    default: "",
    required: true
  },
  labelRose: {
    type: String,
    default: "",
    required: true
  },
  labelGem: {
    type: String,
    default: "",
    required: true
  },
  nameRouterShop: {
    type: String,
    default: "home",
    required: false
  }
});
</script>

<style scoped></style>
