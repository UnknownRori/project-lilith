<script setup lang="ts">
import { ref } from 'vue';

import useRoute from '@/composable/useRoute.ts';
import NavLink from './NavLink.vue';
import { cn } from '@/utils';
import { Hamburger } from '@/components/ui/icons';

const links = [
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
]

const hamburgerButtonOpen = ref(false);
const route = useRoute();

</script>

<template>
  <nav class="absolute w-full z-100">
    <div class="flex flex-row-reverse items-center w-full gap-8 p-4">
      <Hamburger @click='() => hamburgerButtonOpen = !hamburgerButtonOpen' :isOpen='hamburgerButtonOpen' />

      <ul class="flex flex-row gap-4">
        <li :key='link.name' v-for='link in links'>
          <NavLink :href='link.href' :class='cn(`text-white/20 hover:text-white sm:text:md md:text-lg
            lg:text-xl font-bold duration-300`)' :isActive='route.isActive(link.href)'>
            {{ link.name }}
          </NavLink>
        </li>
      </ul>

    </div>
  </nav>
</template>
