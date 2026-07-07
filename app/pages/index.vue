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
  <v-container>
    <v-img class="mx-auto" rounded="xl" :src="imgSrc" width="fit-content" />
  </v-container>
</template>
