<script setup lang='ts'>
import { ArrowDown } from '@/components/ui/icons';
</script>

<template>
  <div class="w-screen h-screen flex flex-col gap-4 justify-center items-center py-24">
    <h1 class="tracking-widest font-poet text-white text-5xl mt-auto animate-pulse text-shadow-lg
      text-shadow-white/40">Welcome</h1>
    <span class="tracking-widest font-bold text-xl text-white animate-pulse duration-300 mt-auto
      text-shadow-white/40 text-shadow-lg">
      Scroll Down
    </span>
    <ArrowDown />
  </div>
</template>
