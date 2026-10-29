import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import About from './pages/About.vue'
import Releases from './pages/Releases.vue'
import Contact from './pages/Contact.vue'
import NotFound from './pages/NotFound.vue'
import reveal from './directives/reveal'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: About, meta: { title: 'Producer & DJ' } },
    { path: '/about', redirect: '/' },
    { path: '/releases', component: Releases, meta: { title: 'Releases' } },
    { path: '/contact', component: Contact, meta: { title: 'Contact' } },
    { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Not found' } },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = `${to.meta.title} — Eric Shans`
})

createApp(App).use(router).directive('reveal', reveal).mount('#app')
