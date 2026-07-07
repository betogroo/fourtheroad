<script setup lang="ts">
  const imgSrc = new URL('~/assets/img/404.png', import.meta.url).href
  definePageMeta({
    name: '404',
    title: '404 - Not Found',
    layout: 'no-nav',
  })
</script>

<template>
  <app-public-container>
    <ui-empty-state
      :img-src="imgSrc"
      text="A página que você acessou ainda não está disponível. Estamos na estrada, e logo logo você verá mais aventuras"
      title="Oooops! Algo deu errado"
  /></app-public-container>
</template>
