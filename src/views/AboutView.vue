<template>
  <div class="about-view">
    <div class="about-container">
      <h1>About</h1>
      <p>This is the about page. You can add more detailed information about yourself here.</p>
      <p>
        Feel free to customize this page with your educational background, work experience, and
        professional journey.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-view {
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  padding: 4rem 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.about-container h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1f2937;
}

.about-container p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .about-container h1 {
    color: #f9fafb;
  }

  .about-container p {
    color: #d1d5db;
  }
}
</style>
