<script setup lang="ts">
const printResume = () => {
  window.print()
}
// CV information extracted from HalimePehlivanResume-EN.pdf
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
    'Research and Development Engineer specialized in cooling and refrigeration system design for Data Centers and industrial applications, including Ex-proof systems in compliance with ATEX standards. Experienced in mechanical design, CFD analysis, and thermal system optimization.',

  experience: [
    {
      title: 'Research and Development Engineer',
      company: 'TMS Industrial Refrigeration Inc',
      location: 'Istanbul, Turkey',
      duration: '2023 - 2024',
      description: [
        'Specialized in cooling and refrigeration system design for Data Centers and industrial applications, including Ex-proof systems in compliance with ATEX standards',
        'Performed capacity calculations, cooling load analysis, and system sizing to optimize performance and cost efficiency',
        'Redesigned fan cell geometry and conducted CFD analysis (COMSOL), achieving a 15% increase in internal fan efficiency',
        'Prepared material take-offs (MTO), design documentation, and P&IDs to support feasibility, concept, and detailed design phases',
        'Developed in-house software tools to improve performance analysis and equipment selection for both standard and customized HVAC/R devices',
        'Conducted feasibility studies and literature research on advanced cooling technologies, including Air-to-Air Heat Exchanger systems',
        'Supervised post-production device testing and collaborated with sales and interdisciplinary teams to ensure technical requirements and client goals were met',
      ],
    },
    {
      title: 'Mechanical Engineer',
      company: 'ONUK-BG Industrial Defense Inc',
      location: 'Istanbul, Turkey',
      duration: '2021 - 2022',
      description: [
        'Designed mechanical parts for defense systems using AutoCAD, CATIA, and Fusion 360',
        'Developed corrosion-resistant molds and managed sheet metal bending and machining processes to produce durable components',
        'Streamlined CNC programming and setup for 3-axis and 5-axis machines, completing a 1-month task in 15 days and enabling fully automated toolpaths without manual checks, which increased operational efficiency by 35%',
        'Created a tool and NC code tracking system that improved setup accuracy and reduced human error by 40%',
      ],
    },
  ],

  education: [
    {
      degree: 'Software Developer',
      school: '42 Heilbronn',
      location: 'Heilbronn, Germany',
      duration: 'Present - Sep 2024',
      details:
        'Project-based learning school, based on peer-to-peer learning. The 42 Program takes a project-based approach to progress and is designed to develop technical and people skills that match the expectations of the labor market.',
    },
    {
      degree: 'Bachelor of Science in Mechanical Engineering',
      school: 'Zonguldak Bulent Ecevit University Faculty of Engineering',
      location: 'Turkey',
      duration: '2016 - 2021',
      details: '',
    },
  ],

  skills: {
    'CAD/CAE Tools': [
      'CATIA',
      'AutoCAD',
      'SolidWorks',
      'ANSYS (CFD)',
      'COMSOL (CFD)',
      'Fusion 360 (Manufacturing Process)',
    ],
    'Programming & Debugging': [
      'LLDB/GDB (Debugging)',
      'Python',
      'Shell Scripting',
      'C Programming',
      'C++',
    ],
    'Development Tools': ['MATLAB', 'Git', 'Unix/Linux Environments'],
  },

  projects: [
    {
      name: 'Mechanical Design Optimization',
      description:
        'Redesigned fan cell geometry and achieved 15% increase in internal fan efficiency through CFD analysis',
      technologies: ['COMSOL (CFD)', 'CATIA', 'Mechanical Design'],
    },
    {
      name: 'CNC Programming & Tracking System',
      description:
        'Created tool and NC code tracking system, reducing human error by 40% and streamlining CNC operations',
      technologies: ['CNC Programming', 'Python', 'Process Optimization'],
    },
    {
      name: 'In-House Software Development',
      description:
        'Developed software tools for performance analysis and equipment selection for HVAC/R devices',
      technologies: ['Python', 'Software Development', 'Data Analysis'],
    },
  ],

  certifications: [
    {
      name: 'ATEX Training',
      issuer: 'IEP ENERGY PETROLEUM INSTITUTE',
      year: '',
    },
    {
      name: 'MBSE: Model Verified System',
      issuer: 'University at Buffalo, The State University of New York, offered through Coursera',
      year: '',
    },
    {
      name: 'Digital manufacturing & design',
      issuer: 'University at Buffalo, The State University of New York, offered through Coursera',
      year: '',
    },
  ],

  languages: [
    { language: 'English', level: 'C1' },
    { language: 'German', level: 'A2' },
    { language: 'Turkish', level: 'Native' },
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
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tech">
            <span class="tech" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
          </div>
        </div>
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
  .resume-content {
    padding: 1.5rem;
  }

  .cv-header h1 {
    font-size: 1.75rem;
  }

  .contact-info {
    font-size: 0.85rem;
  }

  .contact-info span {
    display: block;
  }

  .job-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
