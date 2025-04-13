<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { cn } from '@/utils';
import {
  NameCard,
  AboutCard,
  LilithImageCard
} from '@/components';

const isMounted = ref(false);
onMounted(() => {
  setTimeout(() => {
    isMounted.value = true;
  }, 500);
});
</script>

<template>
  <div class="relative flex flex-col justify-around items-center h-screen py-18 gap-4
    md:px-4 lg:px-12">

    <div class="relative sm:hidden md:flex w-full justify-center items-center">
      <span :class="cn('block bg-white w-0 h-[2px] duration-1000', isMounted ? 'w-full' : '')"></span>
      <span class="px-4"></span>
      <span :class="cn('block bg-white w-0 h-[2px] duration-1000', isMounted ? 'w-full' : '')"></span>
    </div>

    <div class="relative flex sm:flex-col md:flex-row justify-around items-center w-full h-full">
      <LilithImageCard />

      <div class="flex flex-col justify-between items-center sm:w-full md:w-[340px] h-full
        content-stretch py-8">
        <NameCard />
        <AboutCard />
      </div>
    </div>

    <div class="relative sm:hidden md:flex w-full justify-center items-center">
      <span :class="cn('block bg-white w-0 h-[2px] duration-1000', isMounted ? 'w-full' : '')"></span>
      <span class="px-4"></span>
      <span :class="cn('block bg-white w-0 h-[2px] duration-1000', isMounted ? 'w-full' : '')"></span>
    </div>
  </div>
</template>
