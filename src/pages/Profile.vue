<script setup lang='ts'>
import {
  NameCard,
  AboutCard,
  LilithImageCard
} from '@/components';
</script>

<template>
  <div class="relative flex sm:flex-col md:flex-row justify-around items-center h-screen py-18
    px-12">
    <LilithImageCard />

    <div class="flex flex-col justify-between items-center sm:w-full md:w-[340px] h-full
        content-stretch py-8">
      <NameCard />
      <AboutCard />
    </div>
  </div>
</template>
