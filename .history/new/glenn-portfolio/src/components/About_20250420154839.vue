<template>
  <section id="about" class="about" data-scroll-item>
    <div class="wrap">
      <div class="grid">
        <div class="about-title">
          <h2 class="label">
            <span class="label-inner">About me</span>
          </h2>
        </div>

        <div class="about-text">
          <p>
            Hi, my name is Glenn Catteeuw, a multidisciplinary designer &amp;
            art director based in Belgium. With a passion for well-crafted
            experiences, I believe in beauty to empower ideas.
          </p>
        </div>
      </div>

      <div class="grid pt-48">
        <div class="about-text">
          <p>
            My goal is to connect people with brands &amp; businesses through
            design. A combination of strong concepts and refined execution to
            deliver premium results. Basically I like creating cool sh*t.
          </p>
        </div>
      </div>

      <div class="grid pt-48">
        <div class="about-text">
          <p>
            Currently I'm working as a freelance Art Director / Designer &amp;
            accepting new projects from June 2025 onwards. I'm always available
            for interesting collaborations and fun side projects. If you would
            like to work together, feel free to get in touch.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  padding: 8rem 1rem;
  position: relative;
}

.wrap {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.about-title {
  margin-bottom: 2rem;
}

.label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: var(--text-color);
  opacity: 0.7;
}

.about-text {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-color);
}

.pt-48 {
  padding-top: 3rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(8, 1fr);
  }

  .about-title {
    grid-column: 2 / 4;
  }

  .about-text {
    grid-column: 4 / 7;
    font-size: 1.25rem;
  }

  .pt-48 {
    padding-top: 6rem;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(12, 1fr);
  }

  .about-title {
    grid-column: 3 / 5;
  }

  .about-text {
    grid-column: 5 / 8;
  }
}
</style>
