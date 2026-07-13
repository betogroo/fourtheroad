<script setup lang="ts">
  const imgSrc = new URL('~/assets/img/fourtheroad/fourtheroad.png', import.meta.url).href
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
  <app-public-container>
    <ui-card variant="text">
      <v-img class="mx-auto" rounded="xl" :src="imgSrc" width="300" />
      <ui-list>
        <ui-list-item hide-menu title="A Rota" to="/route" />
        <ui-list-item hide-menu title="Galeria" to="/gallery" />
        <ui-list-item hide-menu title="Dicas" to="/tip" />
      </ui-list>
    </ui-card>
  </app-public-container>
</template>
