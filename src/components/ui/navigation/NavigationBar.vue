<script setup lang="ts">
import { ref } from 'vue';
import Link from './Link.vue';
import { Hamburger } from '@/components/ui/icons';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Me',
    href: '/about-me',
  },
  {
    name: 'Projects',
    href: '/projects',
  }
]

const hamburgerButtonOpen = ref(false);

</script>

<template>
  <nav class="absolute w-full inset-0">
    <div class="flex flex-row-reverse gap-8 p-4">
      <Hamburger @click='() => hamburgerButtonOpen = !hamburgerButtonOpen' :isOpen='hamburgerButtonOpen' />

      <ul class="flex flex-row gap-4">
        <li :key='link.name' v-for='link in links'>
          <Link :href='link.href' class='text-white'>
          {{ link.name }}
          </Link>
        </li>
      </ul>

    </div>
  </nav>
</template>
