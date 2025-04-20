<template>
  <footer class="footer" data-scroll-item>
    <div class="wrap">
      <div class="footer-content">
        <div class="footer-credit">
          <div class="label">
            Development by
            <a
              class="credit-link"
              href="https://rogierdeboeve.com/"
              target="_blank"
              rel="noopener"
            >
              <span class="credit-link-hover"></span>
              <span class="credit-link-label">Rogier de Boevé</span>
            </a>
          </div>
        </div>

        <div class="theme-toggle" @click="toggleTheme">
          <div class="theme-toggle-indicator"></div>
          <div class="theme-toggle-label">
            <div class="theme-toggle-label-inner">
              <div>NRML</div>
              <div>NEON</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    toggleTheme() {
      this.$store.commit("toggleTheme");
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 3rem 1rem;
}

.wrap {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.footer-credit {
  margin-bottom: 2rem;
}

.label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: var(--text-color);
  opacity: 0.7;
}

.credit-link {
  position: relative;
  color: var(--primary-color);
  text-decoration: none;
  padding-bottom: 0.125rem;
}

.credit-link-hover {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.credit-link:hover .credit-link-hover {
  width: 100%;
}

.theme-toggle {
  position: relative;
  width: 4rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: var(--secondary-color);
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
}

.theme-toggle-indicator {
  position: absolute;
  left: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--primary-color);
  transition: transform 0.3s ease;
}

.theme-neon .theme-toggle-indicator {
  transform: translateX(2rem);
}

.theme-toggle-label {
  position: absolute;
  top: -1.5rem;
  left: 0;
  width: 100%;
  overflow: hidden;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.theme-toggle-label-inner {
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: transform 0.3s ease;
}

.theme-neon .theme-toggle-label-inner {
  transform: translateX(-50%);
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
  }

  .footer-credit {
    margin-bottom: 0;
  }
}
</style>
