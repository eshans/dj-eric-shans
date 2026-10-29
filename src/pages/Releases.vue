<script setup>
import { ref, computed } from 'vue'
import ReleaseCard from '../components/ReleaseCard.vue'
import Icon from '../components/Icon.vue'
import releases from '../data/releases.json'

const beatport = 'https://www.beatport.com/artist/eric-shans/6134'

// Labels that don't get their own filter (their releases still show under "All")
const hiddenFilters = ['Candyflip', 'Canopy Sounds', 'Dub!ucid', 'Viva Recordings', 'Flowing Movement Music', 'The Seed']

// Labels ordered by how many releases they have
const counts = releases.reduce((acc, r) => ({ ...acc, [r.label]: (acc[r.label] || 0) + 1 }), {})
const labels = Object.keys(counts)
  .filter((label) => !hiddenFilters.includes(label))
  .sort((a, b) => counts[b] - counts[a] || a.localeCompare(b))

const active = ref('All')
const shown = computed(() => (active.value === 'All' ? releases : releases.filter((r) => r.label === active.value)))
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 pt-12 sm:px-8 sm:pt-20">
    <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-xs tracking-[0.2em] text-muted uppercase">Discography</p>
        <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">Releases</h1>
      </div>
      <a
        :href="beatport"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-1.5 self-start border-b border-line pb-1 text-sm text-muted transition-colors hover:border-paper hover:text-paper sm:self-auto"
      >
        All releases &amp; remixes on Beatport <Icon name="arrow" />
      </a>
    </div>

    <div class="-mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter by label">
      <button
        v-for="label in ['All', ...labels]"
        :key="label"
        class="shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] transition-colors"
        :class="active === label ? 'border-paper bg-paper text-ink' : 'border-line text-muted hover:border-muted hover:text-paper'"
        :aria-pressed="active === label"
        @click="active = label"
      >
        {{ label }}
      </button>
    </div>

    <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
      <ReleaseCard v-for="(release, i) in shown" :key="release.id" v-reveal="(i % 4) * 70" :release="release" />
    </div>

    <p class="mt-16 text-sm text-muted">
      Looking for something else? The full catalogue lives on
      <a :href="beatport" target="_blank" rel="noreferrer" class="text-paper underline decoration-line underline-offset-4 hover:decoration-paper">Beatport</a>.
    </p>
  </section>
</template>
