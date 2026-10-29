// v-reveal: fade an element up the first time it scrolls into view.
// Optional value is a delay in ms, for staggering items in a row.
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add('is-revealed')
      observer.unobserve(entry.target)
    }
  },
  { rootMargin: '0px 0px -8% 0px' },
)

export default {
  mounted(el, { value }) {
    el.classList.add('reveal')
    if (value) el.style.transitionDelay = `${value}ms`
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
