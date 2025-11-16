<template>
  <div class="brain-concept-container">
    <!-- Brain with pulsating glow -->
    <div class="brain-symbol-wrapper">
      <div class="brain-glow brain-glow-outer"></div>
      <div class="brain-glow brain-glow-inner"></div>

      <!-- Data stream particles emitting from brain -->
      <div class="data-stream" v-for="n in 20" :key="n" :style="getStreamStyle(n)"></div>
    </div>

    <button class="center-button" type="button" @click="toggleAboutPanel">
      <span>About Me</span>
      <span><h3>Halime Pehlivan</h3></span>
    </button>

    <!-- Text labels with data line connections -->
    <div class="label-wrapper left-label-wrapper">
      <div class="data-line left-line"></div>
      <div class="label left-label">
        <span class="label-text">Software Developer</span>
        <RouterLink class="label-button" :to="{ name: 'software-developer' }">
          Explore Role
        </RouterLink>
      </div>
    </div>

    <div class="label-wrapper right-label-wrapper">
      <div class="data-line right-line"></div>
      <div class="label right-label">
        <span class="label-text">Mechanical Engineer</span>
        <RouterLink class="label-button" :to="{ name: 'mechanical-engineer' }">
          Explore Role
        </RouterLink>
      </div>
    </div>
  </div>

  <div class="panel-overlay" v-if="isAnyPanelOpen" @click="closePanels"></div>

  <section class="info-panel center-card" :class="{ 'is-open': showAboutPanel }">
    <button class="panel-close" type="button" @click="closePanels">×</button>
    <div class="panel-hero">
      <img class="panel-avatar" :src="photo" alt="Halime Pehlivan" />
    </div>
    <h3 class="panel-title">About Me</h3>
    <p class="panel-text">
      I blend mechanical engineering rigor with software craftsmanship to design efficient systems
      and intuitive digital experiences.
    </p>
    <ul class="panel-list">
      <li>Mechanical design & thermal analysis</li>
      <li>Frontend development with Vue & TypeScript</li>
      <li>Collaborative, experiment-driven problem solving</li>
    </ul>
    <div class="panel-icons" aria-label="Contact Links">
      <a
        class="panel-icon-btn"
        href="mailto:phlvnhalime@outlook.com"
        aria-label="Email"
        title="Email"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="m4 6 8 6 8-6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <a
        class="panel-icon-btn"
        href="https://github.com/phlvnhalime"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.86-.01-1.68-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05.79-.22 1.64-.33 2.48-.33s1.69.11 2.48.33c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.31.68.92.68 1.86 0 1.35-.01 2.44-.01 2.77 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          />
        </svg>
      </a>
      <a
        class="panel-icon-btn"
        href="https://www.linkedin.com/in/halime-pehlivan"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            d="M6.94 7.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM4.75 20.25h4.39V9.38H4.75v10.87Zm6.51 0h4.39v-5.62c0-1.49.55-2.5 1.93-2.5 1.05 0 1.58.74 1.58 2.5v5.62h4.39v-6.3c0-3.58-1.83-5.25-4.27-5.25-1.96 0-2.83.97-3.31 1.66h.03V9.38h-4.74c.06 1.32 0 10.87 0 10.87Z"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import './css/BrainConcept.css'
import photo from '@/assets/IMG_5782.png'

const showAboutPanel = ref(false)

const isAnyPanelOpen = computed(() => showAboutPanel.value)

const toggleAboutPanel = () => {
  showAboutPanel.value = !showAboutPanel.value
}

const closePanels = () => {
  showAboutPanel.value = false
}

const getStreamStyle = (index: number) => {
  const angle = (index / 20) * 360
  const distance = 150 + Math.random() * 50
  const x = Math.cos((angle * Math.PI) / 180) * distance
  const y = Math.sin((angle * Math.PI) / 180) * distance
  const delay = Math.random() * 2

  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    animationDelay: `${delay}s`,
  }
}
</script>
