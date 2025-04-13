<script setup lang='ts'>
import { Router } from "@/libs/router";
defineProps<{
  router: Router
}>();
</script>

<template>
  <div class="absolute w-screen h-screen">
    <Transition>
      <component :is='$props.router.currentComponent.value' />
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
