<script lang="ts" setup>
import { cn } from '@/utils';
import Link from './Link.vue';

defineProps<{
  href: string;
  isActive?: boolean,
}>();

</script>

<template>
  <div class="relative group font-poet">
    <span :class="cn(`absolute -bottom-1 left-0 z-10 h-[2px] w-0 bg-white/20 dark:bg-white
duration-500`, isActive ? 'w-full bg-white ' : 'group-hover:w-full group-hover:bg-white ')"></span>
    <Link :href="href" :class="`tracking dark:text-white ${isActive ? `font-bold text-white
text-shadow-lg text-shadow-white/20` : ''}`">
    <slot />
    </Link>

    <span :class="cn(`absolute -bottom-1 right-0 z-10 h-[2px] w-0 bg-white/20 dark:bg-white
duration-500`, isActive ? 'w-full bg-white ' : 'group-hover:w-full group-hover:bg-white ')"></span>
  </div>
</template>
