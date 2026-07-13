<script setup lang="ts">
  import type { Icon } from '~/types/ui/icons'

  interface Props {
    icon?: Icon
    title?: string
  }
  defineProps<Props>()
</script>

<template>
  <ui-card variant="tonal">
    <div class="d-flex align-center justify-center">
      <v-icon v-if="icon" :icon="ICONS[icon]" />
      <ui-heading :level="2">{{ title }}</ui-heading>
    </div>
  </ui-card>
</template>
