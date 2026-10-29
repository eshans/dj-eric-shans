<script setup>
import Icon from './Icon.vue'

defineProps({ release: { type: Object, required: true } })
</script>

<template>
  <div v-if="release.buy || release.stream" class="flex gap-4 text-sm">
    <a
      v-if="release.buy"
      :href="release.buy"
      target="_blank"
      rel="noreferrer"
      class="inline-flex items-center gap-1 text-muted transition-colors hover:text-paper"
    >
      Buy <Icon name="arrow" />
    </a>
    <a
      v-if="release.stream"
      :href="release.stream"
      target="_blank"
      rel="noreferrer"
      class="inline-flex items-center gap-1 text-muted transition-colors hover:text-paper"
    >
      Stream <Icon name="arrow" />
    </a>
  </div>
</template>
