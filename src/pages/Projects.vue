<script setup lang='ts'>
import { Card } from '@/components/ui/card';
import { Tag } from '@/components/ui/icons';
import {
  projectLists
} from '@/data/Project.ts';
</script>

<template>
  <div class="relative flex w-screen h-screen justify-center items-center sm:px-4 sm:py-24 md:p-24">
    <Card class="flex flex-wrap gap-4 justify-center items-center w-full h-full overflow-scroll">
      <div :key='data.name' v-for='data in projectLists' class="flex flex-col gap-4 w-[300px]
        h-[300px] items-stretch">
        <img :src="data.imgUrl" :alt="data.name" class="object-cover w-full h-full">
        <div class="flex flex-col gap-2">
          <h1 class="text-lg font-bold text-white">
            {{ data.name }}
          </h1>
          <p class="text-white">
            {{ data.description }}
          </p>
          <ul class="flex flex-wrap gap-2">
            <li :key='name' v-for='name in data.tags'>
              <Tag>
                {{ name }}
              </Tag>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  </div>
</template>
