<script setup lang="ts">
// You can replace these with your actual information
const personalInfo = {
  name: 'Halime Pehlivan',
  title: 'Research and Development Engineer',
  description:
    'Mechanical Engineer & Software Developer specializing in cooling systems, CFD analysis, and thermal optimization.',
  email: 'phlvnhalime@outlook.com',
  location: 'Based in Heilbronn, Germany',
  bio: 'I am a Research and Development Engineer with expertise in cooling and refrigeration system design, CFD analysis, and mechanical engineering. Currently pursuing software development at 42 Heilbronn, I combine my engineering background with programming skills to solve complex technical challenges.',
}

const skills = [
  { name: 'COMSOL (CFD)', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'CATIA', level: 80 },
  { name: 'AutoCAD', level: 90 },
  { name: 'SolidWorks', level: 95 },
  { name: 'ANSYS (CFD)', level: 95 },
  { name: 'C Programming', level: 75 },
  { name: 'MATLAB', level: 85 },
]

const projects = [
  {
    title: 'Fan Cell Optimization',
    description:
      'Redesigned fan cell geometry achieving 15% increase in internal fan efficiency through CFD analysis using COMSOL.',
    technologies: ['COMSOL', 'CFD Analysis', 'CATIA'],
    link: '#',
  },
  {
    title: 'CNC Tracking System',
    description:
      'Created tool and NC code tracking system reducing human error by 40% and streamlining CNC operations.',
    technologies: ['Python', 'CNC Programming', 'Process Optimization'],
    link: '#',
  },
  {
    title: 'HVAC/R Software Tools',
    description:
      'Developed in-house software tools for performance analysis and equipment selection for HVAC/R devices.',
    technologies: ['Python', 'Software Development', 'Data Analysis'],
    link: '#',
  },
]
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Hi, I'm <span class="highlight">{{ personalInfo.name }}</span>
          </h1>
          <h2 class="hero-subtitle">{{ personalInfo.title }}</h2>
          <p class="hero-description">{{ personalInfo.description }}</p>
          <div class="hero-location">
            <span class="location-icon">📍</span>
            {{ personalInfo.location }}
          </div>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">Get In Touch</a>
            <a href="#projects" class="btn btn-secondary">View My Work</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="profile-placeholder">
            <span class="profile-icon">👤</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about-section">
      <div class="section-container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <p>{{ personalInfo.bio }}</p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open
            source projects, or sharing my knowledge through blog posts and tutorials.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section skills-section">
      <div class="section-container">
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.name" class="skill-item">
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percentage">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects-section">
      <div class="section-container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div v-for="(project, index) in projects" :key="index" class="project-card">
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-technologies">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              <a :href="project.link" class="project-link"> View Project → </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact-section">
      <div class="section-container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
          <p class="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your visions.
          </p>
          <div class="contact-info">
            <a :href="`mailto:${personalInfo.email}`" class="contact-item">
              <span class="contact-icon">📧</span>
              <span>{{ personalInfo.email }}</span>
            </a>
            <div class="social-links">
              <a href="#" class="social-link">LinkedIn</a>
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} {{ personalInfo.name }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.home-container {
  margin-top: 80px;
}

/* Hero Section */
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.highlight {
  color: #fbbf24;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

.hero-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.location-icon {
  font-size: 1.3rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-placeholder {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid rgba(255, 255, 255, 0.3);
}

.profile-icon {
  font-size: 8rem;
}

/* Section Styles */
.section {
  padding: 5rem 0;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
}

/* About Section */
.about-section {
  background: #f9fafb;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1.5rem;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.skill-item {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 600;
  color: #1f2937;
}

.skill-percentage {
  font-weight: 600;
  color: #6366f1;
}

.skill-bar {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 4px;
  transition: width 1s ease;
}

/* Projects Section */
.projects-section {
  background: #f9fafb;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.project-content {
  padding: 2rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
}

.project-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: #ede9fe;
  color: #6366f1;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-link {
  color: #6366f1;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s ease;
}

.project-link:hover {
  transform: translateX(5px);
}

/* Contact Section */
.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-description {
  font-size: 1.2rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: #1f2937;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item:hover {
  color: #6366f1;
}

.contact-icon {
  font-size: 1.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  color: #6366f1;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #4f46e5;
  text-decoration: underline;
}

/* Footer */
.footer {
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .profile-placeholder {
    width: 200px;
    height: 200px;
  }

  .profile-icon {
    font-size: 5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .social-links {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
