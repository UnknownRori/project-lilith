<script setup lang="ts">
import { ref } from 'vue';
import NavLink from './NavLink.vue';
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
  <nav class="absolute w-full z-100">
    <div class="flex flex-row-reverse items-center w-full gap-8 p-4">
      <Hamburger @click='() => hamburgerButtonOpen = !hamburgerButtonOpen' :isOpen='hamburgerButtonOpen' />

      <ul class="flex flex-row gap-4">
        <li :key='link.name' v-for='link in links'>
          <NavLink :href='link.href' class='text-white/20 hover:text-white sm:text:md md:text-lg
            lg:text-3xl font-bold duration-300'>
            {{ link.name }}
          </NavLink>
        </li>
      </ul>

    </div>
  </nav>
</template>
