import { ref, computed } from 'vue'
import { tracks } from '../data/site'

// One shared <audio> element so playback survives route changes.
const audio = new Audio()
audio.preload = 'none'

const index = ref(0)
const loaded = ref(false)
const playing = ref(false)
const time = ref(0)
const duration = ref(0)

const session = 'mediaSession' in navigator ? navigator.mediaSession : null

audio.addEventListener('play', () => {
  playing.value = true
  if (session) session.playbackState = 'playing'
})
audio.addEventListener('pause', () => {
  playing.value = false
  if (session) session.playbackState = 'paused'
})
audio.addEventListener('timeupdate', () => (time.value = audio.currentTime))
audio.addEventListener('loadedmetadata', () => (duration.value = audio.duration))
audio.addEventListener('ended', () => playTrack(index.value + 1))

function load(i) {
  index.value = (i + tracks.length) % tracks.length
  const track = tracks[index.value]
  audio.src = track.audio
  loaded.value = true
  time.value = 0
  duration.value = 0

  // Lock screen / menu bar / headphone controls
  if (session && 'MediaMetadata' in window) {
    session.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: track.label,
      artwork: [{ src: new URL(track.cover, location.origin).href }],
    })
  }
}

function playTrack(i) {
  if (!loaded.value || i !== index.value) load(i)
  audio.play()
}

function toggle() {
  if (!loaded.value) load(index.value)
  audio.paused ? audio.play() : audio.pause()
}

function prev() {
  if (audio.currentTime > 3) audio.currentTime = 0
  else playTrack(index.value - 1)
}

function next() {
  playTrack(index.value + 1)
}

function seek(seconds) {
  audio.currentTime = seconds
}

if (session) {
  const handlers = {
    play: () => audio.play(),
    pause: () => audio.pause(),
    previoustrack: prev,
    nexttrack: next,
    seekto: (e) => seek(e.seekTime),
  }
  for (const [action, handler] of Object.entries(handlers)) {
    try {
      session.setActionHandler(action, handler)
    } catch {
      // Action not supported by this browser
    }
  }
}

export function usePlayer() {
  return {
    tracks,
    index,
    current: computed(() => tracks[index.value]),
    playing,
    time,
    duration,
    playTrack,
    toggle,
    prev,
    next,
    seek,
  }
}

// Play state for a release that has a matching preview track (by title).
export function useReleaseTrack(getTitle) {
  const trackIndex = computed(() => tracks.findIndex((t) => t.title === getTitle()))
  const isPlaying = computed(() => trackIndex.value === index.value && playing.value)

  function togglePlay() {
    trackIndex.value === index.value ? toggle() : playTrack(trackIndex.value)
  }

  return { hasTrack: computed(() => trackIndex.value !== -1), isPlaying, togglePlay }
}
