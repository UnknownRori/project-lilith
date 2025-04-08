<script setup lang="ts">
defineProps<{
  href: string,
  class: string,
}>();

function click() {
  // Redirect to something
  console.log("Link Clicked");
}

</script>

<template>
  <a :href="$props.href" @click='click' :class="$props.class">
    <slot />
  </a>
</template>
