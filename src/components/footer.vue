<template lang="pug">
footer(class='py-10 px-6 text-center')
  nav(class='mb-6 flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-xl sm:text-2xl items-center justify-center')
    a(v-for="link in navLinks" :key="link.name" :href="link.path" class="relative group")
      | {{ link.name }}
      span(class="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full")

  p(class='mt-10 text-base text-gray-500')
    | Copyright © {{ new Date().getFullYear() }} Adithyan MP. All Rights Reserved.
</template>

<script setup>
const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' }
]
</script>
