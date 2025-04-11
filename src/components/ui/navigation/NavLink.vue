<script lang="ts" setup>
import Link from './Link.vue';

defineProps<{
  href: string;
  isActive?: boolean,
}>();

</script>

<template>
  <div class="relative group font-poet">
    <span :class="`absolute -bottom-1 left-0 z-10 h-[2px] w-0 bg-white dark:bg-white duration-500 ${isActive ? 'w-full ' : 'group-hover:w-full '
      }`"></span>
    <Link :href="href" :class="`tracking dark:text-white ${isActive ? 'font-bold' : ''}`">
    <slot />
    </Link>
    <span :class="`absolute -bottom-1 right-0 z-10 h-[2px] w-0 bg-white dark:bg-white duration-500 ${isActive ? 'w-full ' : 'group-hover:w-full '
      }`"></span>
  </div>
</template>
