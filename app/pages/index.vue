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
    <ui-card variant="text">
      <v-img class="mx-auto" rounded="xl" :src="imgSrc" width="300" />
      <ui-list>
        <ui-list-item
          v-for="item in drawerMenu"
          :key="item.path"
          hide-menu
          :icon="item.menu?.icon"
          :title="item.menu?.title"
          :to="item.path"
        />
      </ui-list>
    </ui-card>
  </app-public-container>
</template>
