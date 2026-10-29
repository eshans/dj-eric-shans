<script setup>
import { ref, onMounted } from 'vue'

defineProps({ src: { type: String, required: true }, alt: { type: String, default: '' } })

// Fade in once loaded; the parent's bg-raised acts as the placeholder.
const img = ref(null)
const loaded = ref(false)
onMounted(() => {
  if (img.value?.complete) loaded.value = true
})
</script>

<template>
  <img
    ref="img"
    :src="src"
    :alt="alt"
    loading="lazy"
    decoding="async"
    class="size-full object-cover transition duration-500 ease-out"
    :class="loaded ? 'opacity-100' : 'opacity-0'"
    @load="loaded = true"
  />
</template>
