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
    year: '2018',
    headline: 'Automation Curiosity',
    context: 'First Python scripts to automate HVAC spreadsheets during internship.',
    summary:
      'Wrote ad-hoc Python utilities to clean measurement data and generate reports, cutting repetitive work for the team.',
    details:
      'Introduced version control with Git, documented mini-scripts for colleagues, and realized how software can unlock efficiency inside mechanical workflows.',
    isOpen: false,
  },
  {
    id: 2,
    year: '2020',
    headline: 'Visualization in MATLAB',
    context: 'Academic CFD coursework & early data dashboards.',
    summary:
      'Built MATLAB interfaces to visualize flow simulations and benchmark cooling layouts, translating raw numbers into actionable plots.',
    details:
      'Collaborated with classmates to compare CFD scenarios, exported dashboards used in design reviews, and became the go-to person for data storytelling.',
    isOpen: false,
  },
  {
    id: 3,
    year: '2021',
    headline: 'Mechanical Engineer + Code',
    context: 'ONUK-BG Industrial Defense Inc.',
    summary:
      'Created CNC tracking tools blending mechanical expertise with Python scripting to reduce setup errors by 40%.',
    details:
      'Automated NC code validation, implemented logging dashboards, and proved that full-stack thinking accelerates manufacturing decision-making.',
    isOpen: false,
  },
  {
    id: 4,
    year: '2023',
    headline: 'HVAC Analytics Toolkit',
    context: 'TMS Industrial Refrigeration',
    summary:
      'Delivered internal Python + Vue dashboards to accelerate HVAC performance analysis and equipment selection.',
    details:
      'Shipped REST APIs, automated reporting, interactive UI for engineers, and CI workflows that reduced lead time by 30% across projects.',
    isOpen: false,
  },
  {
    id: 5,
    year: '2024',
    headline: '42 Heilbronn',
    context: 'Peer-to-peer software engineering school • Heilbronn, Germany',
    summary:
      'Deep dive into algorithms, networking, graphics and low-level programming through intense project-based learning.',
    details:
      'Leading code reviews, building production-grade C projects, and mentoring peers while exploring creative front-end with Vue, TypeScript, and motion design.',
    isOpen: false,
  },
  {
    id: 6,
    year: '2025',
    headline: 'Immersive Portfolio & Experiments',
    context: 'Self-directed R&D • Remote',
    summary:
      'Designing responsive storytelling experiences with shader effects, WebGL, and real-time animation systems.',
    details:
      'Experimenting with diagonal timelines, parallax interfaces, and data-driven narratives that celebrate the intersection of mechanical insight and software craft.',
    isOpen: false,
  },
])

const sortedTimeline = computed(() =>
  [...timeline.value].sort((a, b) => Number(b.year) - Number(a.year)),
)

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
      </div>

      <ul class="timeline-focus">
        <li>Single-page apps with Vue 3 & Pinia</li>
        <li>TypeScript-first component systems</li>
        <li>Data visualization & storytelling</li>
        <li>CI/CD, testing, and performance</li>
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
