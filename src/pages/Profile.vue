<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import {
  NameCard,
  AboutCard,
  LilithImageCard
} from '@/components';

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <Transition>
    <div v-if='isMounted' class="relative flex sm:flex-col md:flex-row justify-around items-center h-screen py-18
    px-12">
      <LilithImageCard />

      <div class="flex flex-col justify-between items-center sm:w-full md:w-[340px] h-full
        content-stretch py-8">
        <NameCard />
        <AboutCard />
      </div>
    </div>
  </Transition>
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
