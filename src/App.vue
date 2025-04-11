<script setup lang="ts">
import { Building2, MapPin, Clock5, Heart, Languages } from 'lucide-vue-next';

import { DefaultLayout } from '@/layouts';
import { ImageAngled, CardAngled } from '@/components/ui/angled';
</script>

<template>
  <DefaultLayout>
    <div class="relative flex sm:flex-col md:flex-row justify-between items-center h-screen py-18 px-12">
      <ImageAngled src="assets/img/me.gif" class="sm:w-full sm:h-full md:w-[300px] md:h-full bg-white p-1" angle="5" />
      <div class="flex flex-col justify-between items-center sm:w-full md:w-[300px] h-full
        content-stretch py-8">
        <CardAngled class="w-full bg-white p-1" angle="15">
          <div class="flex flex-col gap-2 bg-gray-900 w-full h-full p-6 text-white font-bold
            text-center">
            <span class="text-2xl">
              UnknownRori
            </span>
            <span class="italic">
              Lilith Itou / Akbar
            </span>
          </div>
        </CardAngled>

        <CardAngled class="w-full bg-white p-1" angle="10">
          <div class="flex flex-col gap-2 bg-gray-900 w-full h-full py-8 px-4 text-white font-bold
            text-center">
            <div class="flex gap-4">
              <Building2 class="text-white" />
              STMIK AMIKOM Surakarta
            </div>
            <div class="flex gap-4">
              <MapPin class="text-white" />
              Indonesia
            </div>
            <div class="flex gap-4">
              <Clock5 class="text-white" />
              05:50
            </div>
            <div class="flex gap-4">
              <Heart class="text-white" />
              Programming, Games, Music
            </div>
            <div class="flex gap-4">
              <Languages class="text-white" />
              Indonesian, English
            </div>
          </div>
        </CardAngled>
      </div>
    </div>
  </DefaultLayout>
</template>
