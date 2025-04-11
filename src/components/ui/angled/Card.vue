<script setup lang="ts">
import { cn } from '@/utils';

defineProps<{
  angle: string
  class?: string;
}>();

const clipPath = (angle: number) =>
  `polygon(0 0, 100% ${angle}%, 100% 100%, 0% ${100 - angle}%)`;
</script>

<template>
  <div :class="cn('overflow-hidden', $props.class)" :style="{
    clipPath: clipPath(angle),
  }">
    <div class="w-full h-full overflow-hidden" :style="{ backgroundColor: 'transparent', clipPath: clipPath(angle) }">
      <slot />
    </div>
  </div>
</template>
