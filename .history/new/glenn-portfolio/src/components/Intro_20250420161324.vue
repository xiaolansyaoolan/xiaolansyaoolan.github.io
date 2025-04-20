<template>
  <section id="intro" class="intro" data-scroll-item>
    <div class="intro-inner">
      <div class="intro-text">
        <h2 class="intro-title">
          <span class="wrap">
            <span class="grid">
              <span class="intro-title-line">
                <span class="intro-title-line-inner">Visual</span>
              </span>
              <span class="intro-title-line">
                <span class="intro-title-line-inner">Designer</span>
              </span>
              <span class="intro-title-line">
                <span class="intro-title-line-inner">Based in</span>
              </span>
              <span class="intro-title-line">
                <span class="intro-title-line-inner">Belgium</span>
              </span>
            </span>
          </span>
        </h2>
      </div>
    </div>

    <div class="intro-arrow">
      <div class="arrow" @click="scrollToAbout">
        <div class="arrow-inner">
          <div class="arrow-svg">
            <div class="arrow-svg-inner">
              <svg
                width="52"
                height="56"
                viewBox="0 0 52 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.0622 0H22.364L22.3631 42.987L4.56991 25.1998L0 29.6536L25.7538 55.2049L51.4257 29.6531L46.8556 25.1991L29.0621 43.064L29.0622 0Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="intro-cta">
      <a href="mailto:hello@glenncatteeuw.com" class="cta">
        <div class="cta-shape">
          <div class="cta-shape-inner"></div>
        </div>
        <div class="cta-text">
          <div class="cta-text-part">
            <div class="cta-text-part-inner">Get in</div>
          </div>
          <div class="cta-text-part">
            <div class="cta-text-part-inner">Touch</div>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro",
  methods: {
    scrollToAbout() {
      this.$scrollTo("about");
    },
  },
};
</script>

<style scoped>
.intro {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem 1rem;
  position: relative;
}

.intro-inner {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.intro-text {
  margin-bottom: 4rem;
}

.intro-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-color);
}

.intro-title-line {
  display: block;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.intro-title-line-inner {
  display: inline-block;
  transform: translateY(0);
  transition: transform 0.5s ease;
}

.intro-arrow {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.arrow {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.arrow:hover {
  transform: translateY(10px);
}

.arrow-svg {
  color: var(--primary-color);
  width: 52px;
  height: 56px;
}

.intro-cta {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-color);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.cta:hover {
  transform: scale(1.05);
}

.cta-shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 100px;
}

.cta-shape-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid var(--primary-color);
  border-radius: 100px;
  transition: background-color 0.3s ease;
}

.cta:hover .cta-shape-inner {
  background-color: rgba(255, 255, 255, 0.2);
}

.cta-text {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .intro-title {
    font-size: 4rem;
  }
}

@media (min-width: 1024px) {
  .intro-title {
    font-size: 5rem;
  }
}
</style>
