<script setup lang="ts">
import { DefaultLayout } from '@/layouts';
import { RouteView } from '@/components/router';

import useSound from '@/composable/useSound.ts';
import useRoute from '@/composable/useRoute.ts';

useSound('/assets/sfx/rain.ogg');
const router = useRoute();
</script>

<template>
  <DefaultLayout>
    <RouteView :router='router'></RouteView>
  </DefaultLayout>
</template>
