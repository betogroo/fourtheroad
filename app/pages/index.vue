<script setup lang="ts">
  const imgSrc = new URL('~/assets/img/fourtheroad/fourtheroad.jpeg', import.meta.url).href
  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Home Page',
      areas: ['navbar', 'drawer'],
      hidden: false,
      icon: 'home',
      priority: 'index',
    },
  })
</script>

<template>
  <div class="d-flex justify-center">
    <v-img :aspect-ratio="1" class="bg-surface elevation-3" :src="imgSrc" width="200" />
  </div>
</template>
