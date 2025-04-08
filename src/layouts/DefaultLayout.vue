<script setup lang="ts">
import { NavigationBar } from '@/components/ui/navigation';
import { ScrollableBackgroundParent, ScrollableBackground, ParallaxCanvas } from '@/components/background';
import { useVirtualScroll } from '@/composable/useVirtualScroll';
import { useScrollStore } from '@/stores/ScrollStore';

const scroll = useScrollStore()

useVirtualScroll((deltaY) => {
  scroll.scrollBy(deltaY)
})
</script>

<template>
  <div class="relative h-screen w-screen">
    <ParallaxCanvas />
    <NavigationBar />

    <div>
      <slot />
    </div>
  </div>
</template>
