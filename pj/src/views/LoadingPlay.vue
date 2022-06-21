<template>
  <div class="w-screen h-screen relative">
    <div
      class="spinner7 absolute top-1/2 transform -translate-y-1/2"
    >
      Doctor
    </div>
    <div class="spinner absolute top-1/2 transform -translate-y-1/2">Detective</div>
    <div class="spinner1 absolute top-1/2 transform -translate-y-1/2">Medium</div>
    <div class="spinner2 absolute top-1/2 transform -translate-y-1/2">Jaller</div>
    <div class="spinner3 absolute top-1/2 transform -translate-y-1/2">Alpha werewolf</div>
    <div class="spinner4 absolute top-1/2 transform -translate-y-1/2">Fool</div>
    <div class="spinner5 absolute top-1/2 transform -translate-y-1/2">Aura seer</div>
    <div class="spinner6 absolute top-1/2 transform -translate-y-1/2">Arsonist</div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.spinner {
  animation: spin 4s linear infinite;
}
.spinner1 {
  animation: spin 4s 0.25s linear infinite;
}
.spinner2 {
  animation: spin 4s 0.5s linear infinite;
}
.spinner3 {
  animation: spin 4s 0.75s linear infinite;
}
.spinner4 {
  animation: spin 4s 1s linear infinite;
}
.spinner5 {
  animation: spin 4s 1.25s linear infinite;
}
.spinner6 {
  animation: spin 4s 1.5s linear infinite;
}
.spinner7 {
  animation: spin 4s 1.75s linear infinite;
}
.spinner8 {
  animation: spin 4s 2s linear infinite;
}
.spinner9 {
  animation: spin 4s 2.25s linear infinite;
}
@keyframes spin {
  0% {
    left: 0;
  }
  100% {
    left: 110%;
  }
}
</style>
