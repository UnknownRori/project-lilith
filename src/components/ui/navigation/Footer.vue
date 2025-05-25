<script lang="ts" setup>
const date = new Date();
</script>
<template>
  <footer class="absolute bottom-0 w-full flex justify-center items-center p-2 select-none">
    <span class="text-white/20">{{ date.getFullYear() }}&copy; Made with ❤️ by UnknownRori</span>
  </footer>
</template>
