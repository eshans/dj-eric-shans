<script setup>
import SiteHeader from './components/SiteHeader.vue'
import PlayerBar from './components/PlayerBar.vue'
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <SiteHeader />

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <footer class="mx-auto mt-24 flex w-full max-w-6xl justify-between px-4 pb-28 text-xs text-muted sm:px-8">
      <span>© {{ new Date().getFullYear() }} Eric Shans</span>
      <span>Brooklyn, NY</span>
    </footer>

    <PlayerBar />
  </div>
</template>
