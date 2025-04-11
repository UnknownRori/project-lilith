<script setup lang="ts">
defineProps<{
  href: string,
  class: string,
}>();

function click(event: Event) {
  event.preventDefault();
  console.log("Link Clicked");
}

</script>

<template>
  <a :href="$props.href" @click='click' :class="$props.class">
    <slot />
  </a>
</template>
