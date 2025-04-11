<script setup lang="ts">
import { cn } from '@/utils';
import CardAngled from './Card.vue';

defineProps<{
  src: string,
  angle: string
  class?: string;
  borderColor?: string;
  borderWidth?: string;
}>();

</script>

<template>
  <CardAngled :angle='angle' :class='$props.class' :borderColor='borderColor' :borderWidth='borderWidth'>
    <img :src="src" class="w-full h-full object-cover object-top" />
  </CardAngled>
</template>
