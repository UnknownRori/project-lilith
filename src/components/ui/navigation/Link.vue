<script setup lang="ts">
import useRoute from '@/composable/useRoute.ts';
const props = defineProps<{
  href: string,
  class: string,
}>();

const router = useRoute();

function click(event: Event) {
  event.preventDefault();
  router.value.go(props.href);
}

</script>

<template>
  <a :href="$props.href" @click='click' :class="$props.class">
    <slot />
  </a>
</template>
