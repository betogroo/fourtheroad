<script setup lang="ts">
  const imgSrc = new URL('~/assets/img/fourtheroad/fourtheroad.png', import.meta.url).href
  definePageMeta({
    layout: 'no-nav',
    menu: {
      title: 'Home Page',
      hidden: false,
      icon: 'home',
    },
  })

  const { getMenuByArea } = useNavigation()
  const drawerMenu = getMenuByArea('drawer')
  console.log(drawerMenu)
</script>

<template>
  <app-public-container>
    <ui-card class="mx-auto" variant="text" width="350">
      <v-img class="mx-auto" rounded="xl" :src="imgSrc" width="325" />
      <fourtheroad-link-card
        v-for="item in drawerMenu"
        :key="item.path"
        class="my-2"
        color="red"
        :icon="item.menu?.icon"
        :title="item.menu?.title"
        :to="item.path"
    /></ui-card>
  </app-public-container>
</template>
