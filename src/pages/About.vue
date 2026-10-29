<script setup>
import Icon from '../components/Icon.vue'
import LatestRelease from '../components/LatestRelease.vue'
import { bio, facts, labels, email } from '../data/site'
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 pt-12 sm:px-8 sm:pt-20">
    <div class="grid gap-10 md:grid-cols-12 md:gap-16">
      <div class="md:col-span-5">
        <img src="/images/erichood1.jpg" alt="Eric Shans" class="aspect-[4/5] w-full rounded-sm object-cover md:sticky md:top-28" />
      </div>

      <div class="md:col-span-7">
        <p class="text-xs tracking-[0.2em] text-muted uppercase">Producer &amp; DJ — Brooklyn, NY</p>
        <h1 class="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
          Melodic and atmospheric house, techno, and ambient music.
        </h1>

        <div class="mt-10 space-y-5 text-[17px] leading-relaxed text-muted">
          <p v-for="(paragraph, i) in bio" :key="i" :class="{ 'text-paper': i === 0 }">{{ paragraph }}</p>
        </div>

        <LatestRelease v-reveal class="mt-12" />

        <dl v-reveal class="mt-14 border-t border-line">
          <div v-for="fact in facts" :key="fact.term" class="grid grid-cols-3 gap-4 border-b border-line py-4 text-sm">
            <dt class="text-muted">{{ fact.term }}</dt>
            <dd class="col-span-2">{{ fact.detail }}</dd>
          </div>
        </dl>

        <h2 class="mt-16 text-xs tracking-[0.2em] text-muted uppercase">Labels</h2>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            v-for="label in labels"
            :key="label.name"
            :href="label.url"
            target="_blank"
            rel="noreferrer"
            class="group flex items-start justify-between rounded-sm border border-line p-5 transition-colors hover:border-muted hover:bg-raised"
          >
            <span>
              <span class="block font-medium">{{ label.name }}</span>
              <span class="mt-1 block text-sm text-muted">{{ label.blurb }}</span>
            </span>
            <Icon name="arrow" class="text-muted transition-colors group-hover:text-accent" />
          </a>
        </div>

        <p class="mt-6 text-sm leading-relaxed text-muted">
          Artists with demos for label consideration, or anyone after production and remix work, can reach Eric at
          <a :href="`mailto:${email}`" class="text-paper underline decoration-line underline-offset-4 hover:decoration-paper">{{ email }}</a>.
        </p>
      </div>
    </div>
  </section>
</template>
