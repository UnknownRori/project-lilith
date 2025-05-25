<script setup lang='ts'>
import { cn } from '@/utils';
import {
  NameCard,
  AboutCard,
  LilithImageCard
} from '@/components';

</script>

<template>
  <div class="relative flex flex-col justify-around items-center h-screen py-18 gap-4
    md:px-4 lg:px-12">

    <div class="relative flex sm:flex-col md:flex-row justify-around items-center w-full h-full">
      <LilithImageCard />

      <div class="flex flex-col justify-between items-center sm:w-full md:w-[340px] h-full
        content-stretch py-8">
        <NameCard />
        <AboutCard />
      </div>
    </div>
  </div>
</template>
