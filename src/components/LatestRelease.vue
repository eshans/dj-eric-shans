<script setup>
import Icon from './Icon.vue'
import CoverImage from './CoverImage.vue'
import ReleaseLinks from './ReleaseLinks.vue'
import releases from '../data/releases.json'
import { useReleaseTrack } from '../composables/usePlayer'

// Add "featured": true to a release in releases.json to pin it here; otherwise the newest is shown.
const release = releases.find((r) => r.featured) ?? releases[0]

const { hasTrack, isPlaying, togglePlay } = useReleaseTrack(() => release.title)
</script>

<template>
  <article class="flex items-center gap-5 rounded-sm border border-line p-4 sm:gap-6">
    <div class="relative size-28 shrink-0 overflow-hidden rounded-sm bg-raised sm:size-36">
      <CoverImage :src="release.cover" :alt="`${release.title} cover art`" />
    </div>

    <div class="min-w-0 flex-1">
      <p class="text-xs tracking-[0.2em] text-muted uppercase">Latest release</p>
      <h2 class="mt-2 text-xl leading-tight font-semibold tracking-tight sm:text-2xl">{{ release.title }}</h2>
      <p class="mt-1 text-sm text-muted">
        {{ release.label }}<template v-if="release.year"> · {{ release.year }}</template>
      </p>

      <div class="mt-4 flex items-center gap-5">
        <button
          v-if="hasTrack"
          class="grid size-10 place-items-center rounded-full bg-paper text-base text-ink transition-transform hover:scale-105"
          :aria-label="`${isPlaying ? 'Pause' : 'Play'} ${release.title}`"
          @click="togglePlay"
        >
          <Icon :name="isPlaying ? 'pause' : 'play'" />
        </button>
        <ReleaseLinks :release="release" />
        <RouterLink to="/releases" class="ml-auto hidden text-sm text-muted transition-colors hover:text-paper sm:inline">
          All releases
        </RouterLink>
      </div>
    </div>
  </article>
</template>
