<script setup lang="ts">
import { NavigationBar, Footer } from '@/components/ui/navigation';
import { SettingsParent } from '@/components/ui/settings';
import { ParallaxCanvas } from '@/components/background';
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
    <SettingsParent />

    <div>
      <slot />
    </div>

    <Footer />

  </div>
</template>
