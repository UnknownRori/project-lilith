<script setup lang="ts">
import { ScrollableBackgroundParent, ScrollableBackground } from '@/components/background';
import { useVirtualScroll } from '@/composable/useVirtualScroll';
import { useScrollStore } from '@/stores/ScrollStore';

const scroll = useScrollStore()

useVirtualScroll((deltaY) => {
  scroll.scrollBy(deltaY)
})
</script>

<template>
  <div class="relative h-screen w-screen">
    <ScrollableBackgroundParent>
      <ScrollableBackground :offsetX='0' :offsetY='0' src="/assets/bg/sky.png" />
      <ScrollableBackground :offsetX='0' :offsetY='500' src="/assets/bg/city.png" />
      <ScrollableBackground :offsetX='0' :offsetY='500' src="/assets/bg/scene.png" />
    </ScrollableBackgroundParent>
  </div>
</template>
