<script setup lang="ts">
import { ref, computed } from 'vue'
import '@/assets/mechanicalEngineer.css'

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
    year: '2016',
    headline: 'Hands-on Foundations',
    context: 'Machine shop & manufacturing internships',
    summary:
      'First exposure to CNC machining, sheet-metal bending, and interpreting technical drawings on the shop floor.',
    details:
      'Learned the realities of tolerances, fixtures, and tooling; absorbed best practices from technicians and began sketching process improvements in notebooks.',
    isOpen: false,
  },
  {
    id: 2,
    year: '2021',
    headline: 'Mechanical Engineer',
    context: 'ONUK-BG Industrial Defense Inc • Istanbul, Turkey',
    summary:
      'Designed corrosion-resistant molds and precision components; streamlined CNC programming for 3-axis and 5-axis production.',
    details:
      'Automated toolpaths, reduced manual checks, and created a tracking system that cut setup errors by 40%. Introduced process documentation that made future iterations faster.',
    isOpen: false,
  },
  {
    id: 3,
    year: '2023',
    headline: 'Research & Development Engineer',
    context: 'TMS Industrial Refrigeration Inc • Istanbul, Turkey',
    summary:
      'Led thermal system design and CFD optimization for data center cooling, including ATEX-compliant solutions.',
    details:
      'Performed cooling load analysis, reimagined fan-cell geometry achieving +15% efficiency, and delivered MTOs, P&IDs, and test documentation across feasibility to validation phases.',
    isOpen: false,
  },
  {
    id: 4,
    year: '2024',
    headline: 'Mechanical ↔ Software Bridge',
    context: 'Independent tools & automation',
    summary:
      'Built calculators, data dashboards, and selection tools that augment mechanical workflows with code.',
    details:
      'Combined MATLAB, Python, and Vue dashboards to help engineers visualize CFD data, choose components faster, and document testing with reusable templates.',
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
  <section class="timeline-page mechanical-timeline">
    <header class="timeline-header">
      <p class="timeline-subtitle">Mechanical Journey</p>
      <h1>Designing Systems that Keep Environments in Balance</h1>
      <p class="timeline-intro">
        From early shop-floor lessons to complex CFD-driven projects, this diagonal timeline reveals
        how each role layered experience in precision design, thermal systems, and process
        innovation.
      </p>
    </header>

    <div class="timeline-cta">
      <a href="/HalimePehlivanResume-EN-ME.pdf" target="_blank" rel="noopener" class="primary-link">
        View Mechanical Engineer CV (PDF)
      </a>
    </div>

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
