<template lang="pug">
transition(name='fade')
  div(v-if='Object.keys(toastMsg).length > 0', class='fixed top-20 inset-x-0 flex justify-center z-50')
    div(class='relative px-6 py-4 w-full max-w-sm mx-auto rounded-xl shadow-lg border flex items-start gap-3', :class='{"bg-green-100 border-green-400 text-green-900": toastMsg.type === "success", "bg-red-100 border-red-400 text-red-900": toastMsg.type === "error"}')
      span(class='flex-1 font-medium text-sm') {{ toastMsg.msg }}
      button(@click='toast("", "")', class='absolute top-4 right-2 p-1 transition')
        closeIcon(class='w-3 h-3 text-gray-600')
</template>

<script setup>
// import { mainStore } from '../stores/index';
import closeIcon from "./icons/close.vue";

const props = defineProps({
    toastMsg: Object,
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
