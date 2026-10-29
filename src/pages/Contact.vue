<script setup>
import Icon from '../components/Icon.vue'
import { email, socials } from '../data/site'
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 pt-12 sm:px-8 sm:pt-20">
    <div class="grid gap-16 md:grid-cols-2 md:gap-20">
      <div>
        <p class="text-xs tracking-[0.2em] text-muted uppercase">Contact</p>
        <h1 class="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">Bookings &amp; remix requests</h1>

        <a
          :href="`mailto:${email}?subject=${encodeURIComponent('Booking Request')}`"
          class="group mt-10 inline-flex items-center gap-3 text-xl break-all sm:text-3xl"
        >
          <span class="border-b border-line pb-1 transition-colors group-hover:border-accent">{{ email }}</span>
          <Icon name="arrow" class="shrink-0 text-muted transition-colors group-hover:text-accent" />
        </a>
      </div>

      <div class="md:pt-9">
        <h2 class="text-xs tracking-[0.2em] text-muted uppercase">Elsewhere</h2>
        <ul class="mt-4 border-t border-line">
          <li v-for="s in socials" :key="s.name">
            <a
              :href="s.url"
              target="_blank"
              rel="noreferrer"
              class="group flex items-center justify-between border-b border-line py-4 transition-colors hover:text-paper"
            >
              <span class="font-medium">{{ s.name }}</span>
              <span class="flex items-center gap-3 text-sm text-muted group-hover:text-paper">
                {{ s.handle }} <Icon name="arrow" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
