<script setup lang="ts">
  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Rota',
      hidden: false,
      icon: 'home',
      areas: ['drawer'],
      priority: 'route',
    },
  })
</script>

<template>
  <ui-page show-back title="Aqui vai a rota">...</ui-page>
</template>
