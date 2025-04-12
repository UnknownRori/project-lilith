<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useParallaxCanvas } from '@/composable/useParallaxCanvas.ts';
import { parallaxImageData, parallaxSceneData } from '@/data/Parallax.ts';

const canvasRef = ref<HTMLCanvasElement | null>(null);

useParallaxCanvas({
  canvas: canvasRef as Ref<HTMLCanvasElement>,
  img: parallaxImageData,
  scene: parallaxSceneData,
});
</script>

<template>
  <canvas ref="canvasRef" class="block w-full h-full fixed top-0 left-0 z-[-1]"></canvas>
</template>
