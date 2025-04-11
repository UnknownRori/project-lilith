<script setup lang="ts">
import { DefaultLayout } from '@/layouts';
import { ProfilePage } from '@/pages';
import useSound from '@/composable/useSound.ts';
useSound('/assets/sfx/rain.ogg');
</script>

<template>
  <DefaultLayout>
    <ProfilePage />
  </DefaultLayout>
</template>
