<script setup lang="ts">
import { ref } from 'vue';
import { DefaultLayout } from '@/layouts';
import { RouteView } from '@/components/router';
import { LoadingScreen } from '@/components';

import useSound from '@/composable/useSound.ts';
import useRoute from '@/composable/useRoute.ts';

useSound('/assets/sfx/rain.ogg');
const router = useRoute();
const isDone = ref(true);
</script>

<template>
  <DefaultLayout>
    <LoadingScreen :show='isDone' @done='() => isDone = false' />
    <RouteView :router='router'></RouteView>
  </DefaultLayout>
</template>
