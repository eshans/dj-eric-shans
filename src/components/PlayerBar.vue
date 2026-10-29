<script setup>
import { computed } from 'vue'
import Icon from './Icon.vue'
import { usePlayer } from '../composables/usePlayer'

const { current, playing, time, duration, toggle, prev, next, seek } = usePlayer()

const progress = computed(() => (duration.value ? (time.value / duration.value) * 100 : 0))

const fmt = (s) => {
  if (!Number.isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  return `${m}:${String(Math.floor(s % 60)).padStart(2, '0')}`
}
</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink/85 backdrop-blur-xl">
    <input
      type="range"
      class="seek absolute inset-x-0 top-0 w-full -translate-y-1/2"
      min="0"
      :max="duration || 0"
      step="0.1"
      :value="time"
      :style="{ '--progress': `${progress}%` }"
      :disabled="!duration"
      aria-label="Seek"
      @input="seek(Number($event.target.value))"
    />

    <div class="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:gap-4 sm:px-8">
      <img :src="current.cover" alt="" class="size-10 shrink-0 rounded-sm object-cover" />

      <div class="min-w-0 flex-1 leading-tight">
        <p class="truncate text-sm font-medium">{{ current.title }}</p>
        <p class="truncate text-xs text-muted">{{ current.artist }}</p>
      </div>

      <span class="hidden text-xs tabular-nums text-muted sm:block">
        {{ fmt(time) }} / {{ fmt(duration) }}
      </span>

      <div class="flex items-center gap-1">
        <button class="grid size-9 place-items-center text-base text-muted transition-colors hover:text-paper" aria-label="Previous track" @click="prev">
          <Icon name="prev" />
        </button>
        <button
          class="grid size-10 place-items-center rounded-full bg-paper text-base text-ink transition-transform hover:scale-105 active:scale-95"
          :aria-label="playing ? 'Pause' : 'Play'"
          @click="toggle"
        >
          <Icon :name="playing ? 'pause' : 'play'" />
        </button>
        <button class="grid size-9 place-items-center text-base text-muted transition-colors hover:text-paper" aria-label="Next track" @click="next">
          <Icon name="next" />
        </button>
      </div>
    </div>
  </div>
</template>
