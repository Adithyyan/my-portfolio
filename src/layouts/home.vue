<template lang="pug">
Toast(:toastMsg='toastMsg')

section(class='sm:h-screen py-16 sm:py-28 px-10 md:px-20 bg-white flex flex-col md:flex-row items-center justify-center gap-16')
  img(class='w-44 h-44 md:w-96 md:h-96 rounded-full object-cover shadow-lg' src='img/profile-pic.png' alt='Profile')
  div(class='text-center md:text-center space-y-2 sm:space-y-4 max-w-xl')
    p(class='text-gray-600 text-lg') Hello, I'm
    h1(class='text-4xl md:text-5xl font-bold') Adithyan MP
    h2(class='text-2xl md:text-3xl font-semibold text-gray-600') Software Engineer

    div(class='mt-4 sm:mt-8 flex flex-row gap-5 justify-center md:justify-start')
      button(class='border border-black px-6 py-4 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition' @click='downloadCV') Download CV
      button(class='bg-gray-800 text-white px-8 py-4 rounded-full font-semibold') Contact Info

    div(class='flex justify-center md:justify-center gap-4 text-3xl pt-4')
      a(href='https://www.linkedin.com/in/adithyyan/' class='text-black hover:text-gray-600')
        i(class='fab fa-linkedin')
      a(href='https://github.com/Adithyyan/' class='text-black hover:text-gray-600')
        i(class='fab fa-github')

section(id="about" class='bg-white py-28 px-6 md:px-20 flex flex-col items-center text-center')
  p(class='text-gray-500 text-base tracking-widest') Get To Know More
  h2(class='mt-2 sm:mt-4 text-4xl md:text-5xl font-bold mb-3 sm:mb-20') About Me

  div(class='flex flex-col md:flex-row items-center gap-10 sm:gap-20')
    img(src='img/about-pic.png' alt='Profile' class='w-44 sm:w-96 h-44 sm:h-96 object-cover rounded-3xl shadow-lg')

    div(class='space-y-6 max-w-2xl')
      div(class='flex flex-row text-center md:text-center gap-6 justify-center md:justify-start')
        div(class='border border-black rounded-3xl p-6 sm:w-96 shadow-sm')
          i(class='fas fa-award text-2xl mb-2')
          h3(class='font-bold text-xl') Experience
          p(class='text-gray-500 text-sm') 2+ years  
          p(class='text-gray-600 text-sm') Full Stack Development

        div(class='border border-black rounded-3xl p-6 sm:w-96 shadow-sm')
          i(class='fas fa-user-graduate text-2xl mb-2')
          h3(class='font-bold text-xl') Education
          p(class='text-gray-500 text-sm') B.Sc. Computer Science
          p(class='text-gray-600 text-sm') HSC Computer Science

      p(class='text-gray-700 text-left text-base leading-relaxed')
        | I'm a full-stack Software Engineer with experience in React.js, Vue.js, and Node.js, passionate about building scalable, user-focused applications. I’ve led end-to-end development of platforms across healthcare and education, turning real-world needs into high-performance solutions. I'm now seeking opportunities to grow as a developer and contribute to impactful, cross-functional teams.

section(id="experience" class='bg-white py-6 sm:py-28 px-6 md:px-20 text-center')
  p(class='text-gray-500 text-base tracking-widest') Explore My
  h2(class='mt-2 sm:mt-4 text-4xl md:text-5xl font-bold mb-10') Experience

  div(class='sm:px-20 flex flex-col md:flex-row gap-10 justify-center')
    div(class='border border-gray-500 rounded-3xl p-10 w-full md:w-1/2 shadow-md')
      h3(class='text-xl sm:text-3xl text-gray-600 font-semibold mb-8 text-center') Frontend Development
      div(class='grid grid-cols-1 sm:grid-cols-2 gap-6 text-left')
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong HTML
            p(class='text-gray-500 text-sm') Experienced
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong CSS
            p(class='text-gray-500 text-sm') Experienced
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong SASS
            p(class='text-gray-500 text-sm') Intermediate
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong JavaScript
            p(class='text-gray-500 text-sm') Basic
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong TypeScript
            p(class='text-gray-500 text-sm') Basic
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong Material UI
            p(class='text-gray-500 text-sm') Intermediate
  
    div(class='border border-gray-500 rounded-3xl p-10 w-full md:w-1/2 shadow-md')
      h3(class='text-xl sm:text-3xl font-semibold text-gray-600 mb-8 text-center') Backend Development
      div(class='grid grid-cols-1 sm:grid-cols-2 gap-6 text-left')
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong PostgreSQL
            p(class='text-gray-500 text-sm') Basic
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong Node JS
            p(class='text-gray-500 text-sm') Intermediate
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong Express JS
            p(class='text-gray-500 text-sm') Intermediate
  
        div(class='flex justify-center')
          i(class='fas fa-check-circle text-black text-xl')
          div(class='ml-2')
            strong Git
            p(class='text-gray-500 text-sm') Intermediate

section(id="projects" class='py-16 px-6 text-center')
  h4(class='text-gray-500 text-base tracking-widest') Browse My Recent
  h2(class='mt-2 text-4xl md:text-5xl font-bold mb-10') Projects

  div(class='flex flex-wrap justify-center gap-8')

    div(class='bg-white rounded-3xl border border-gray-500 shadow-md max-w-sm p-6')
      img(src='/img/project-1.png' alt='Project One' class='rounded-xl mb-4')
      h3(class='text-xl font-bold mb-4') Project One
      div(class='flex justify-center gap-4')
        a(href='#' target='_blank' class='border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition') Github
        a(href='#' target='_blank' class='border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition') Live Demo

    div(class='bg-white rounded-3xl shadow-md border border-gray-500 max-w-sm p-6')
      img(src='/img/project-2.png' alt='Project Two' class='rounded-xl mb-4')
      h3(class='text-xl font-bold mb-4') Project Two
      div(class='flex justify-center gap-4')
        a(href='#' target='_blank' class='border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition') Github
        a(href='#' target='_blank' class='border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition') Live Demo

    div(class='bg-white rounded-3xl shadow-md border border-gray-500 max-w-sm p-6')
      img(src='/img/project-3.png' alt='Project Three' class='rounded-xl mb-4')
      h3(class='text-xl font-bold mb-4') Project Three
      div(class='flex justify-center gap-4')
        a(href='#' target='_blank' class='border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition') Github
        a(href='#' target='_blank' class='border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition') Live Demo

section(id="contact" class='py-10 sm:py-20 px-6 text-center')
  p(class='text-gray-500 text-sm mb-2') Get in Touch
  h2(class='mt-2 text-4xl md:text-5xl font-bold mb-10') Contact Me

  div(class='flex flex-col sm:flex-row flex-wrap items-center justify-center border border-gray-400 rounded-3xl px-6 sm:px-10 py-6 gap-6 sm:gap-8 shadow-sm max-w-xl mx-auto')
    a(href='mailto:adhiofficial908@gmail.com' class='flex items-center gap-3 text-black text-lg font-medium hover:underline')
      span(class='bg-black text-white rounded-full h-9 w-9 flex items-center justify-center')
        i(class='fas fa-envelope')
      span adhiofficial908@gmail.com

    a(href='https://www.linkedin.com/in/adithyyan/' target='_blank' class='flex items-center gap-3 text-black text-lg font-medium hover:underline')
      span(class='bg-black text-white rounded-full h-9 w-9 flex items-center justify-center')
        i(class='fab fa-linkedin-in')
      span LinkedIn
</template>

<script setup>
import { ref } from 'vue';
import Toast from '../components/toast.vue';

const toastMsg = ref({});

function showToast(msg, type) {
  toastMsg.value = { msg, type };
  setTimeout(() => {
    toastMsg.value = {};
  }, 3000);
}

function downloadCV() {
  // showToast('CV download coming soon', 'success');
  window.open('/pdf/Adithyan.pdf', '_blank');
}
</script>
