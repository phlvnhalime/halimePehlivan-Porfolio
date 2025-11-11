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
    <div class="contact-links">
      <a href="mailto:phlvnhalime@outlook.com" target="_blank" rel="noopener" class="contact-link">
        📧 phlvnhalime@outlook.com
      </a>
      <a href="https://github.com/phlvnhalime" target="_blank" rel="noopener" class="contact-link">
        🐙 github.com/phlvnhalime
      </a>
      <a
        href="https://www.linkedin.com/in/halime-pehlivan"
        target="_blank"
        rel="noopener"
        class="contact-link"
      >
        💼 linkedin.com/in/halime-pehlivan
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import './css/BrainConcept.css'

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
