<script setup>
defineProps({ name: { type: String, required: true } })
</script>

<template>
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-[1em]">
    <path v-if="name === 'play'" d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
    <g v-else-if="name === 'pause'">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </g>
    <g v-else-if="name === 'prev'">
      <rect x="5" y="5" width="2.5" height="14" rx="1" />
      <path d="M19 6.2v11.6a1 1 0 0 1-1.53.85L9.2 13.5a1.75 1.75 0 0 1 0-3l8.27-5.15A1 1 0 0 1 19 6.2Z" />
    </g>
    <g v-else-if="name === 'next'">
      <rect x="16.5" y="5" width="2.5" height="14" rx="1" />
      <path d="M5 6.2v11.6a1 1 0 0 0 1.53.85l8.27-5.15a1.75 1.75 0 0 0 0-3L6.53 5.35A1 1 0 0 0 5 6.2Z" />
    </g>
    <path
      v-else-if="name === 'arrow'"
      d="M7 17 17 7M8 7h9v9"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
