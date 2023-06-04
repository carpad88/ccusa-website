<script setup lang="ts">
const menu = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Learn',
    path: '/learn',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Listings',
    path: '/listings',
  },
]
</script>

<template>
  <div class="grid min-h-screen grid-rows-[5rem_1fr_minmax(5rem,_min-content)]">
    <nav class="flex items-center justify-between px-8 shadow">
      <div>LOGO</div>
      <div class="flex h-full items-center space-x-2">
        <nuxt-link
          v-for="item in menu" :key="item.name" :to="item.path"
          class="flex h-full w-20 items-center justify-center transition-all hover:bg-gray-100"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
    </nav>

    <NuxtPage class="container" />

    <footer class="flex items-center justify-center border-t border-gray-200 bg-indigo-900 text-indigo-200">
      <div class="container flex justify-center">
        Footer
      </div>
    </footer>
  </div>
</template>
