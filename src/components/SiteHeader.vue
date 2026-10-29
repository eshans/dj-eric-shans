<script setup>
const links = [
  { to: '/', label: 'About' },
  { to: '/releases', label: 'Releases' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur-xl">
    <nav class="mx-auto flex h-16 max-w-6xl md:h-20 items-center justify-between gap-4 px-4 sm:px-8">
      <RouterLink to="/" class="shrink-0" aria-label="Eric Shans — home">
        <img src="/images/logo-eric-red.png" alt="Eric Shans" class="h-3 w-auto sm:h-4 md:h-5 lg:h-6" />
      </RouterLink>

      <ul class="flex gap-5 text-[13px] sm:gap-8 sm:text-sm">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="relative py-2 text-muted transition-colors hover:text-paper aria-[current=page]:text-paper aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-px aria-[current=page]:after:h-px aria-[current=page]:after:bg-accent"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
