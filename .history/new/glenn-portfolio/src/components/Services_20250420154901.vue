<template>
  <section id="services" class="services" data-scroll-item>
    <div class="wrap">
      <div class="grid">
        <div class="services-title">
          <h2 class="label">
            <span class="label-inner">Services I can help you with</span>
          </h2>
        </div>

        <div class="services-list">
          <ul class="services-ul">
            <li class="service-item">
              <div class="service-item-inner">Concepts.</div>
            </li>
            <li class="service-item">
              <div class="service-item-inner">Art direction.</div>
            </li>
            <li class="service-item">
              <div class="service-item-inner">Branding.</div>
            </li>
            <li class="service-item">
              <div class="service-item-inner">Iconography.</div>
            </li>
            <li class="service-item">
              <div class="service-item-inner">Logo design.</div>
            </li>
            <li class="service-item">
              <div class="service-item-inner">Motion.</div>
            </li>
            <li class="service-item">
              <div class="service-item-inner">UI.</div>
            </li>
            <li class="service-item">
              <div class="service-item-inner">UX.</div>
            </li>
            <li class="service-item">
              <div class="service-item-inner">Websites.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
.services {
  padding: 5rem 1rem;
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

.services-title {
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

.services-ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: -0.5rem;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 2.25rem;
  line-height: 1;
}

.service-item {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.service-item-inner {
  position: relative;
  display: inline-block;
  overflow: hidden;
  transition: color 0.3s ease;
}

.service-item-inner::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.service-item:hover .service-item-inner::after {
  width: 100%;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(8, 1fr);
  }

  .services-title {
    grid-column: 2 / 9;
  }

  .services-list {
    grid-column: 2 / 8;
  }

  .services-ul {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(12, 1fr);
  }

  .services-title {
    grid-column: 3 / 13;
  }

  .services-list {
    grid-column: 3 / 13;
  }

  .services-ul {
    font-size: 4rem;
  }
}
</style>
