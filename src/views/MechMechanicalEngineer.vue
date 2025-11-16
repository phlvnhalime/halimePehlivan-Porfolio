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
  links?: { label: string; url: string }[]
}

const timeline = ref<TimelineEntry[]>([
  {
    id: 0,
    year: '2016',
    headline: 'Engineering Student',
    context: 'Zonguldak Bulent Ecevit University Faculty of Engineering • Turkey',
    summary: 'Bachelor of Science in Mechanical Engineering (2016–2021).',
    details:
      'Coursework and labs across CAD/CAE, thermodynamics, and manufacturing; project-based learning emphasizing practical engineering skills.',
    isOpen: false,
  },
  {
    id: 103,
    year: '2021',
    headline:
      'Undergraduate Thesis — Improving the Thermal Performance of Heat Pipes Using Phase Change Materials (PCMs)',
    context: 'Thermal Systems • MATLAB analysis',
    summary:
      'Improved thermal performance of a heat pipe using phase change materials (PCM); validated via analytical models and MATLAB-based simulations.',
    details:
      'Modeled transient heat transfer and phase-change behavior; performed parameter sweeps (geometry, material, boundary conditions), compared baseline vs. PCM-enhanced configurations, and reported gains in temperature regulation and effective thermal resistance.',
    isOpen: false,
  },
  {
    id: 100,
    year: '2018',
    headline: 'Grizu-26 Space Team',
    context: 'Satellite systems & team-based R&D',
    summary:
      'Joined the Grizu-26 Space Team and contributed to payload and mission planning for competition readiness.',
    details:
      'Collaborated on subsystem design, documentation, and test planning for student satellite competitions.',
    isOpen: false,
  },
  {
    id: 101,
    year: '2019',
    headline: 'CanSat Competition — World 2nd Place',
    context: 'AIAA / CanSat Competition',
    summary: 'Achieved second place globally in the CanSat Competition with Grizu-26.',
    details:
      'Delivered mission requirements under strict constraints—sensor integration, recovery systems, telemetry, and field tests.',
    isOpen: false,
    links: [{ label: 'CanSat Competition', url: 'https://www.cansatcompetition.com/' }],
  },
  {
    id: 102,
    year: '2019',
    headline: 'TÜRKSAT Model Satellite — 1st Place',
    context: 'TÜRKSAT Model Satellite Competition',
    summary: 'Won first place in the national TÜRKSAT Model Satellite competition.',
    details:
      'Led design and validation for mission profile, airframe, and payload; emphasized reliability, documentation, and test coverage.',
    isOpen: false,
    links: [{ label: 'TÜRKSAT Model Satellite', url: 'https://modeluydu.turksat.com.tr/' }],
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
      <h1>Advanced Design & System Integration</h1>
      <p class="timeline-intro">
        From early shop-floor lessons to complex CFD-driven projects, this timeline reveals how each
        role layered experience in precision design, thermal systems, and process innovation.
      </p>
    </header>

    <h3 class="timeline-subtitle">Highlights</h3>
    <ul class="timeline-focus">
      <li>
        <strong>High-Precision CAD/CAE:</strong>
        Designing and building mechanical components for Naval Defense systems using CATIA,
        SolidWorks, and Fusion 360.
      </li>
      <li>
        <strong>CFD Analysis & Optimization:</strong>
        Optimizing system performance via fan-cell geometry and cooling load analysis using COMSOL
        and ANSYS (CFD).
      </li>
      <li>
        <strong>Deep HVAC/R Expertise:</strong>
        Competence in sizing cabin crane cooling units and strong proficiency across most industrial
        refrigeration systems.
      </li>
      <li>
        <strong>CNC/NC Optimization:</strong>
        Optimizing NC programming for 3- and 5-axis systems (Siemens/Fanuc compatible) to increase
        operational efficiency and reduce human error.
      </li>
      <li>
        <strong>Model-Based Systems Engineering (MBSE):</strong>
        Knowledge in system architecture and integration; MBSE certification.
      </li>
    </ul>

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
          <div v-if="entry.links && entry.links.length" class="timeline-links">
            <a
              v-for="link in entry.links"
              :key="link.url"
              :href="link.url"
              target="_blank"
              rel="noopener"
              class="timeline-link"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
