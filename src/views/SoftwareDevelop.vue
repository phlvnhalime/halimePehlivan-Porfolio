<script setup lang="ts">
import { ref, computed } from 'vue'
import '@/assets/softwareEngineer.css'

type TimelineEntry = {
  id: number
  year: string
  headline: string
  context: string
  summary: string
  details: string
  isOpen: boolean
}

const timeline = ref<TimelineEntry[]>([
  {
    id: 1,
    year: '2025',
    headline: 'Website Design & Portfolio',
    context: 'Vue 3 + TypeScript + Vite • Personal',
    summary:
      'Modern portfolio focused on motion, clarity, and storytelling with clean component systems.',
    details:
      'Built responsive layouts, diagonal timeline, and subtle animation cues; optimized for performance and readability.',
    isOpen: false,
  },
  {
    id: 2,
    year: '2025',
    headline: 'Webserv',
    context:
      'C++98 • HTTP/1.1 server • 42 Heilbronn • Repo: https://github.com/phlvnhalime/webserv',
    summary:
      'A from-scratch HTTP/1.1 server with non-blocking I/O, request parsing, and configurable virtual servers.',
    details:
      'Implemented event loop, routing, CGI handling, and RFC-compliant parsing; focused on robustness and clear error handling.',
    isOpen: false,
  },
  {
    id: 3,
    year: '2024',
    headline: 'Minishell',
    context: 'C • Shell • 42 Heilbronn • Repo: https://github.com/phlvnhalime/minishell',
    summary:
      'Bash-like shell supporting parsing, pipes, redirections, and heredocs with proper signal handling.',
    details:
      'Managed env variables, execve, and built-ins; implemented lexer/parser, job control basics, and memory-safe resource management.',
    isOpen: false,
  },
  {
    id: 4,
    year: '2024',
    headline: 'push_swap',
    context: 'C • Algorithms • 42 Heilbronn • Repo: https://github.com/phlvnhalime/push_swap',
    summary:
      'Sorting a stack with constrained operations using an O(n log n) strategy (radix/chunk methods).',
    details:
      'Implemented two-stack operations (sa/sb/ss, pa/pb, ra/rb/rr, rra/rrb/rrr), optimized move counts, ensured norm compliance and memory safety.',
    isOpen: false,
  },
  {
    id: 5,
    year: '2024',
    headline: '42 Heilbronn',
    context: 'Peer-to-peer software engineering school • Heilbronn, Germany',
    summary:
      'Admitted to the 42 program; intensive project-based learning across algorithms, networking, and systems.',
    details:
      'Collaboration-first environment, code reviews, production-grade C projects, and continuous self-directed learning.',
    isOpen: false,
  },
])

const sortedTimeline = computed(() => timeline.value)

const toggleEntry = (id: number) => {
  timeline.value = timeline.value.map((entry) =>
    entry.id === id ? { ...entry, isOpen: !entry.isOpen } : entry,
  )
}
</script>

<template>
  <section class="timeline-page software-timeline">
    <header class="timeline-header">
      <div class="timeline-heading">
        <p class="timeline-subtitle">Software Journey</p>
        <h1>Software Developer</h1>
        <p class="timeline-intro">
          Crafting immersive web experiences with Vue, TypeScript, and modern tooling—bridging data,
          design, and performance while staying rooted in engineering fundamentals.
        </p>
      </div>

      <div class="timeline-cta">
        <a href="mailto:phlvnhalime@outlook.com" class="primary-link">Start a Project</a>
        <a
          href="https://github.com/phlvnhalime"
          target="_blank"
          rel="noopener"
          class="secondary-link"
        >
          GitHub
        </a>
        <a v-if="false" href="#" class="primary-link"> CV (PDF) </a>
      </div>

      <h3 class="timeline-subtitle">Highlights</h3>
      <ul class="timeline-focus">
        <li>
          <strong>Core Systems Programming (C/C++):</strong>
          Deep system programming skills in C, C++, and Unix/Linux environments.
        </li>
        <li>
          <strong>Automation & Data Processing:</strong>
          Automating complex processes with Python and C# (e.g., HVAC/R capacity calculations).
        </li>
        <li>
          <strong>Sustainable Coding & DevOps:</strong>
          Sustainable coding practices with Docker, Git, and CI/CD pipelines.
        </li>
        <li>
          <strong>Algorithmic Problem Solving:</strong>
          Solving complex problems with mathematical modeling and algorithmic approaches.
        </li>
      </ul>
    </header>

    <div class="timeline-grid">
      <article
        v-for="(entry, index) in sortedTimeline"
        :key="entry.id"
        :class="['timeline-entry', { 'is-open': entry.isOpen, 'is-even': index % 2 === 0 }]"
      >
        <div class="timeline-node">
          <span class="timeline-year">{{ entry.year }}</span>
          <span class="timeline-dot"></span>
        </div>

        <div class="timeline-body">
          <header>
            <h2>{{ entry.headline }}</h2>
            <p class="timeline-context">{{ entry.context }}</p>
          </header>
          <p class="timeline-summary">{{ entry.summary }}</p>

          <button class="timeline-toggle" type="button" @click="toggleEntry(entry.id)">
            {{ entry.isOpen ? 'Hide details' : 'View details' }}
          </button>

          <transition name="timeline-fade">
            <p v-if="entry.isOpen" class="timeline-details">
              {{ entry.details }}
            </p>
          </transition>
        </div>
      </article>
    </div>
  </section>
</template>
