<script setup lang="ts">
const printResume = () => {
  window.print()
}
const cvData = {
  personalInfo: {
    name: 'Halime Pehlivan',
    email: 'phlvnhalime@outlook.com',
    phone: '+49 155 102 038 22',
    location: 'Heilbronn, Germany',
    linkedin: 'linkedin.com/in/halime by-p-a93326162',
    github: 'github.com/phlvnhalime',
    website: '',
  },
  summary:
    'Full-stack developer shipping Python/Django REST APIs and React/Next.js interfaces in production-adjacent automotive software at Bosch/ETAS. I take features from refinement to working software: REST services, data models, UI, tests, and code review. Systems programming foundation in C/C++ and Unix from 42 Heilbronn, backed by a mechanical engineering degree and four years of industry experience in simulation, measurement, and reliability.',

  experience: [
    {
      title: 'Full-Stack Developer Intern',
      company: 'Bosch / ETAS',
      location: 'Abstatt, Germany',
      duration: '04/2026 - Present',
      description: [
        'Own slices of the stack: Django REST APIs, relational schemas, and React/Next.js interfaces for automotive middleware and release automation',
        'Implement middleware for routing, authentication, and inter-service communication so backend and frontend share a stable contract',
        'Contribute to automation, deployment, and monitoring of worker jobs in the release pipeline',
        'Ship through an Agile/Scrum team using Git and Jira, writing maintainable code reviewed by senior engineers',
      ],
    },
    {
      title: 'Research and Development Engineer',
      company: 'TMS Industrial Refrigeration Inc.',
      location: 'Istanbul, Türkiye',
      duration: '01/2023 - 01/2024',
      description: [
        'Built Python and C# tools that turned equipment and load data into sizing decisions for industrial and data center cooling systems',
        'Processed test and CFD (COMSOL) results to improve reliability and efficiency, including a fan cell redesign that raised internal fan efficiency by 15%',
        'Documented designs and calculation workflows so other engineers could reuse them',
      ],
    },
    {
      title: 'Mechanical Engineer',
      company: 'ONUK-BG Industrial Defence Inc.',
      location: 'Istanbul, Türkiye',
      duration: '04/2021 - 09/2022',
      description: [
        'Developed an NC code tracking and optimization system, reducing human error by 25%',
        'Optimized Siemens/Fanuc-compatible NC programming for 3-axis and 5-axis systems',
        'Contributed to technical design and engineering processes for composite and naval structures',
      ],
    },
  ],

  education: [
    {
      degree: 'Software Developer Program',
      school: '42 Heilbronn',
      location: 'Heilbronn, Germany',
      duration: '07/2024 - Present',
      details:
        'Project-based curriculum in C, C++, TypeScript/web, and Unix with daily peer code review. Shipped full-stack and systems projects under peer evaluation.',
    },
    {
      degree: 'B.Sc. Mechanical Engineering',
      school: 'Zonguldak Bülent Ecevit University',
      location: 'Zonguldak, Türkiye',
      duration: '08/2016 - 02/2021',
      details:
        'Thesis on thermal performance and energy efficiency of heat pipes using phase-change materials (PCMs).',
    },
  ],

  skills: {
    'Languages': ['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'Bash'],
    'Backend & APIs': [
      'Django REST Framework',
      'Fastify',
      'Node.js',
      'REST API Design',
      'Authentication & Middleware',
      'PostgreSQL',
      'MySQL',
      'Prisma',
    ],
    'Frontend': ['React', 'Next.js', 'Vue 3', 'Vite', 'HTML5', 'CSS3'],
    'Infrastructure & Delivery': [
      'Docker',
      'Git',
      'CI/CD',
      'Linux / Unix',
      'Jira',
      'Agile / Scrum',
    ],
    'Testing & Debugging': ['pytest', 'Code Review', 'GDB / LLDB', 'Valgrind'],
    'Engineering & Analysis': ['MATLAB', 'COMSOL (CFD)', 'ANSYS', 'CATIA', 'SolidWorks', 'AutoCAD'],
  },

  projects: [
    {
      name: 'Wallet API — Multi-user Banking REST API',
      description:
        'REST APIs for accounts, transactions, authentication, and permission management, with database models, migrations, and business logic in Django and PostgreSQL. Covered by pytest suites for endpoints, authentication flows, and transaction logic.',
      technologies: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'pytest'],
      link: 'github.com/phlvnhalime',
    },
    {
      name: 'Transcendence — Community Events Platform',
      description:
        'Full-stack product with Fastify APIs covering auth, authorization, and rate limiting, a React/TypeScript client, and relational models designed in Prisma/MySQL. Shipped an event-management flow end to end.',
      technologies: ['React', 'TypeScript', 'Fastify', 'MySQL', 'Prisma', 'Docker'],
      link: 'github.com/phlvnhalime',
    },
    {
      name: 'Webserv — HTTP/1.1 Server',
      description:
        'HTTP/1.1 web server written from scratch in C++ with a non-blocking event loop, RFC-compliant request parsing, routing, CGI execution, and configurable virtual hosts.',
      technologies: ['C++', 'Networking', 'Non-blocking I/O', 'CGI'],
      link: 'github.com/phlvnhalime/webserv',
    },
    {
      name: 'Minishell — Unix Shell Implementation',
      description:
        'Bash-like shell in C with command parsing, pipes, redirections, and environment variables, built on Unix system calls (fork, execve, pipe, dup2) and debugged with LLDB/GDB and Valgrind.',
      technologies: ['C', 'Unix / Linux', 'System Programming'],
      link: 'github.com/phlvnhalime/minishell',
    },
    {
      name: 'Philosophers — Concurrency',
      description:
        'Dining Philosophers problem solved with POSIX threads and mutexes, avoiding deadlock and starvation through resource ordering, a monitoring thread, and millisecond-accurate timing.',
      technologies: ['C', 'Multithreading', 'Mutexes'],
      link: 'github.com/phlvnhalime/philosophers',
    },
    {
      name: 'push_swap — Algorithms',
      description:
        'Stack sorting under a constrained instruction set using an O(n log n) chunk/radix strategy, optimized for minimal move count.',
      technologies: ['C', 'Algorithms', 'Complexity Optimization'],
      link: 'github.com/phlvnhalime/push_swap',
    },
  ],

  activities: [
    {
      role: 'Assistance Team Member',
      organization: '42 Heilbronn',
      duration: '07/2025 - 08/2025',
      description: [
        'Mentored peers on project methodologies and technical challenges',
        'Supported onboarding and integration of new student cohorts',
        'Contributed to technical and educational events',
      ],
    },
    {
      role: 'Mechanical Team Mentor',
      organization: 'Grizu-263',
      duration: '2020 - 2022',
      description: [
        'Mentored the mechanical team on CubeSat/CanSat development and system integration',
        'Applied MATLAB for orbital mechanics simulation and worked on deployment systems and control algorithms',
      ],
    },
  ],

  awards: [
    { name: '2nd Place — 42 Heilbronn × Make.com Hackathon', year: '06/2025' },
    { name: '2nd Place — NASA CanSat Competition (Grizu-263 mechanical team)', year: '06/2019' },
    { name: '1st Place — TURKSAT Model Satellite Competition (Grizu-263)', year: '09/2019' },
  ],

  certifications: [
    {
      name: 'ATEX Training',
      issuer: 'IEP Energy Petroleum Institute',
      year: '',
    },
    {
      name: 'MBSE: Model Verified System',
      issuer: 'University at Buffalo, State University of New York (Coursera)',
      year: '',
    },
    {
      name: 'Digital Manufacturing & Design',
      issuer: 'University at Buffalo, State University of New York (Coursera)',
      year: '',
    },
  ],

  languages: [
    { language: 'Turkish', level: 'Native' },
    { language: 'English', level: 'C1' },
    { language: 'German', level: 'B1' },
  ],
}
</script>

<template>
  <div class="resume-container">
    <div class="resume-header">
      <div class="download-section">
        <button class="download-btn" @click="printResume">📄 Print / Download Resume</button>
      </div>
    </div>

    <div class="resume-content">
      <!-- Header -->
      <header class="cv-header">
        <h1>{{ cvData.personalInfo.name }}</h1>
        <div class="contact-info">
          <span>📧 {{ cvData.personalInfo.email }}</span>
          <span>📱 {{ cvData.personalInfo.phone }}</span>
          <span>📍 {{ cvData.personalInfo.location }}</span>
          <span
            >💼
            <a :href="`https://${cvData.personalInfo.linkedin}`" target="_blank">{{
              cvData.personalInfo.linkedin
            }}</a></span
          >
          <span
            >🐙
            <a :href="`https://${cvData.personalInfo.github}`" target="_blank">{{
              cvData.personalInfo.github
            }}</a></span
          >
        </div>
      </header>

      <!-- Professional Summary -->
      <section class="cv-section">
        <h2 class="section-title">Professional Summary</h2>
        <p>{{ cvData.summary }}</p>
      </section>

      <!-- Experience -->
      <section class="cv-section">
        <h2 class="section-title">Professional Experience</h2>
        <div v-for="(job, index) in cvData.experience" :key="index" class="experience-item">
          <div class="job-header">
            <h3>{{ job.title }}</h3>
            <span class="company">{{ job.company }}</span>
            <span class="location">{{ job.location }}</span>
            <span class="duration">{{ job.duration }}</span>
          </div>
          <ul class="job-description">
            <li v-for="(desc, i) in job.description" :key="i">{{ desc }}</li>
          </ul>
        </div>
      </section>

      <!-- Education -->
      <section class="cv-section">
        <h2 class="section-title">Education</h2>
        <div v-for="(edu, index) in cvData.education" :key="index" class="education-item">
          <h3>{{ edu.degree }}</h3>
          <div class="edu-details">
            <span class="school">{{ edu.school }}</span>
            <span class="edu-location">{{ edu.location }}</span>
            <span class="edu-duration">{{ edu.duration }}</span>
          </div>
          <p class="edu-extra">{{ edu.details }}</p>
        </div>
      </section>

      <!-- Skills -->
      <section class="cv-section">
        <h2 class="section-title">Technical Skills</h2>
        <div v-for="(skills, category) in cvData.skills" :key="category" class="skills-category">
          <h3>{{ category }}:</h3>
          <span v-for="skill in skills" :key="skill" class="skill-badge">{{ skill }}</span>
        </div>
      </section>

      <!-- Projects -->
      <section class="cv-section">
        <h2 class="section-title">Notable Projects</h2>
        <div v-for="(project, index) in cvData.projects" :key="index" class="project-item">
          <h3>
            {{ project.name }}
            <a v-if="project.link" :href="`https://${project.link}`" target="_blank" class="project-link">
              {{ project.link }}
            </a>
          </h3>
          <p>{{ project.description }}</p>
          <div class="project-tech">
            <span class="tech" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </section>

      <!-- Leadership & Activities -->
      <section class="cv-section">
        <h2 class="section-title">Leadership &amp; Activities</h2>
        <div v-for="(item, index) in cvData.activities" :key="index" class="experience-item">
          <div class="job-header">
            <h3>{{ item.role }}</h3>
            <span class="company">{{ item.organization }}</span>
            <span class="duration">{{ item.duration }}</span>
          </div>
          <ul class="job-description">
            <li v-for="(desc, i) in item.description" :key="i">{{ desc }}</li>
          </ul>
        </div>
      </section>

      <!-- Awards -->
      <section class="cv-section">
        <h2 class="section-title">Awards</h2>
        <ul class="certifications-list">
          <li v-for="(award, index) in cvData.awards" :key="index">
            <strong>{{ award.name }}</strong> — {{ award.year }}
          </li>
        </ul>
      </section>

      <!-- Certifications -->
      <section class="cv-section">
        <h2 class="section-title">Certifications</h2>
        <ul class="certifications-list">
          <li v-for="(cert, index) in cvData.certifications" :key="index">
            <strong>{{ cert.name }}</strong> - {{ cert.issuer }} ({{ cert.year }})
          </li>
        </ul>
      </section>

      <!-- Languages -->
      <section class="cv-section">
        <h2 class="section-title">Languages</h2>
        <div class="languages">
          <span v-for="(lang, index) in cvData.languages" :key="index" class="language-item">
            <strong>{{ lang.language }}:</strong> {{ lang.level }}
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.resume-container {
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  background: #f9fafb;
  padding: 2rem 0;
}

.resume-header {
  max-width: 900px;
  margin: 0 auto 2rem;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
}

.download-btn {
  padding: 0.75rem 1.5rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.resume-content {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.cv-header {
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid #6366f1;
  padding-bottom: 1.5rem;
}

.cv-header h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
  font-weight: 700;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  font-size: 0.95rem;
  color: #4b5563;
}

.contact-info a {
  color: #6366f1;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.cv-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.5rem;
  color: #6366f1;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
  font-weight: 700;
}

.experience-item {
  margin-bottom: 2rem;
}

.job-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.job-header h3 {
  font-size: 1.2rem;
  color: #1f2937;
  margin: 0;
  font-weight: 700;
}

.company,
.location,
.duration {
  color: #6366f1;
  font-weight: 600;
}

.company::before {
  content: 'at ';
  color: #6b7280;
  font-weight: normal;
}

.location::before {
  content: ' | ';
  color: #6b7280;
}

.duration {
  color: #6b7280;
  font-weight: normal;
}

.duration::before {
  content: ' | ';
}

.job-description {
  margin: 0;
  padding-left: 1.5rem;
  color: #4b5563;
}

.job-description li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.education-item {
  margin-bottom: 1.5rem;
}

.education-item h3 {
  font-size: 1.1rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.edu-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
  color: #4b5563;
}

.edu-extra {
  color: #4b5563;
  font-style: italic;
}

.skills-category {
  margin-bottom: 1.5rem;
}

.skills-category h3 {
  font-size: 1rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.skill-badge {
  display: inline-block;
  background: #ede9fe;
  color: #6366f1;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  margin: 0.25rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-item {
  margin-bottom: 1.5rem;
}

.project-item h3 {
  font-size: 1.1rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.project-link {
  margin-left: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #6366f1;
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
}

.project-item p {
  color: #4b5563;
  margin-bottom: 0.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tech .tech {
  background: #f3f4f6;
  color: #1f2937;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.certifications-list {
  list-style: none;
  padding: 0;
}

.certifications-list li {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #f9fafb;
  border-left: 3px solid #6366f1;
  color: #4b5563;
}

.languages {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.language-item {
  color: #4b5563;
}

.language-item strong {
  color: #1f2937;
}

/* Print Styles */
@media print {
  .resume-header {
    display: none;
  }

  .resume-content {
    padding: 0;
    box-shadow: none;
  }

  body {
    background: white;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .resume-container {
    margin-top: 60px;
    padding: 1rem 0;
  }

  .resume-header {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }

  .download-btn {
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
    width: 100%;
  }

  .resume-content {
    padding: 1.5rem;
    margin: 0 0.5rem;
  }

  .cv-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
  }

  .cv-header h1 {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }

  .contact-info {
    font-size: 0.85rem;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .contact-info span {
    display: block;
    text-align: center;
  }

  .cv-section {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .job-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .job-header h3 {
    font-size: 1.1rem;
  }

  .company::before,
  .location::before,
  .duration::before {
    content: '';
  }

  .company,
  .location,
  .duration {
    display: block;
    margin-top: 0.25rem;
  }

  .job-description {
    padding-left: 1.25rem;
    font-size: 0.9rem;
  }

  .education-item h3 {
    font-size: 1rem;
  }

  .edu-details {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .skills-category h3 {
    font-size: 0.95rem;
  }

  .skill-badge {
    font-size: 0.85rem;
    padding: 0.35rem 0.7rem;
    margin: 0.2rem;
  }

  .project-item h3 {
    font-size: 1rem;
  }

  .project-item p {
    font-size: 0.9rem;
  }

  .project-tech .tech {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
  }

  .certifications-list li {
    font-size: 0.9rem;
    padding: 0.6rem;
  }

  .languages {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .resume-content {
    padding: 1rem;
    margin: 0 0.25rem;
  }

  .cv-header h1 {
    font-size: 1.5rem;
  }

  .contact-info {
    font-size: 0.8rem;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .job-header h3 {
    font-size: 1rem;
  }

  .job-description {
    font-size: 0.85rem;
    padding-left: 1rem;
  }

  .skill-badge {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }

  .project-item p {
    font-size: 0.85rem;
  }
}
</style>
