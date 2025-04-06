<script setup lang="ts">
defineProps<{
  src: string,
  offsetX: number,
  offsetY: number,
}>();

</script>

<template>
  <img ref='imgRef' :src="$props.src" class="absolute inset-0 object-cover w-full h-full"
    :style="`object-position: ${offsetX}px ${offsetY}px;`" />
</template>
