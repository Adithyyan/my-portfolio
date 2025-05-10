<template lang="pug">
nav(class="flex items-center justify-between px-16 md:px-56 py-12 relative")
  a(href="/" class="text-2xl md:text-4xl") Adithyan MP

  button(class="md:hidden text-4xl z-50" @click="isOpen = !isOpen") 
    span(v-if="!isOpen") ☰
    span(v-else) ✕

  ul(class="hidden md:flex items-center gap-10")
    li(v-for="link in navLinks" :key="link.name")
      a(:href="link.path" class="text-2xl relative group" :class="{ 'text-gray-400 after:w-full after:bg-gray-400': currentPath === link.path }") {{ link.name }}
        span(class="absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 group-hover:w-full" :class="currentPath === link.path ? 'w-full bg-gray-400' : 'w-0'")

  div(v-if="isOpen" class="absolute top-20 right-16 bg-white p-4 flex flex-col gap-4 md:hidden z-40")
    ul(class="flex flex-col gap-3 text-2xl text-center")
      li(v-for="link in navLinks" :key="link.name")
        a(:href="link.path" @click="isOpen = false") {{ link.name }}
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  activePath: String
})

const currentPath = ref(props.activePath)
const isOpen = ref(false)

const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' }
]

watch(() => props.activePath, (newVal) => {
  currentPath.value = newVal
})
</script>
