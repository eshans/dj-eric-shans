<script setup>
import Icon from './Icon.vue'
import CoverImage from './CoverImage.vue'
import ReleaseLinks from './ReleaseLinks.vue'
import { useReleaseTrack } from '../composables/usePlayer'

const props = defineProps({ release: { type: Object, required: true } })

const { hasTrack, isPlaying, togglePlay } = useReleaseTrack(() => props.release.title)
</script>

<template>
  <article class="group">
    <div class="relative aspect-square overflow-hidden rounded-sm bg-raised">
      <CoverImage :src="release.cover" :alt="`${release.title} cover art`" class="group-hover:scale-[1.03]" />
      <button
        v-if="hasTrack"
        class="absolute right-3 bottom-3 grid size-11 place-items-center rounded-full bg-paper text-lg text-ink shadow-lg transition duration-200 hover:scale-105 pointer-fine:translate-y-1 pointer-fine:opacity-0 pointer-fine:group-hover:translate-y-0 pointer-fine:group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
        :class="{ 'translate-y-0! opacity-100!': isPlaying }"
        :aria-label="`${isPlaying ? 'Pause' : 'Play'} ${release.title}`"
        @click="togglePlay"
      >
        <Icon :name="isPlaying ? 'pause' : 'play'" />
      </button>
    </div>

    <h2 class="mt-3 text-[15px] leading-snug font-medium">{{ release.title }}</h2>
    <p class="mt-0.5 text-sm text-muted">
      {{ release.label }}<template v-if="release.year"> · {{ release.year }}</template>
    </p>
    <p v-if="release.note" class="mt-1 text-xs text-muted/70">{{ release.note }}</p>

    <ReleaseLinks :release="release" class="mt-3" />
  </article>
</template>
