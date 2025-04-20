<template>
  <section id="work" class="work" data-scroll-items>
    <div class="work-section" data-scroll-item>
      <div class="case-thumb">
        <a
          href="#"
          class="case-thumb-link"
          aria-label="View case study DeSo"
        ></a>
        <div class="case-thumb-text-wrap">
          <div class="wrap">
            <div class="grid">
              <div class="case-thumb-text">
                <h3 class="case-thumb-title">DeSo</h3>
                <div class="case-thumb-cta">
                  <div class="case-thumb-cta-inner">View case study</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="wrap">
          <div class="grid">
            <div class="case-thumb-image">
              <img
                src="https://res.cloudinary.com/dkcc5o1yv/image/upload/v1677925838/deso_thumb_quclad.png"
                alt="DeSo thumbnail"
                class="case-thumb-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="work-section" data-scroll-item>
      <div class="case-thumb">
        <a
          href="#"
          class="case-thumb-link"
          aria-label="View case study Film Secession"
        ></a>
        <div class="case-thumb-text-wrap">
          <div class="wrap">
            <div class="grid">
              <div class="case-thumb-text">
                <h3 class="case-thumb-title">Film<br />Secession</h3>
                <div class="case-thumb-cta">
                  <div class="case-thumb-cta-inner">View case study</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="wrap">
          <div class="grid">
            <div class="case-thumb-image">
              <img
                src="https://res.cloudinary.com/dkcc5o1yv/image/upload/v1700470871/FS_Cover_esm9ek.png"
                alt="Film Secession thumbnail"
                class="case-thumb-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="work-section" data-scroll-item>
      <div class="case-thumb">
        <a
          href="#"
          class="case-thumb-link"
          aria-label="View case study Coca-Cola x Marshmello"
        ></a>
        <div class="case-thumb-text-wrap">
          <div class="wrap">
            <div class="grid">
              <div class="case-thumb-text">
                <h3 class="case-thumb-title">Coca-Cola x<br />Marshmello</h3>
                <div class="case-thumb-cta">
                  <div class="case-thumb-cta-inner">View case study</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="wrap">
          <div class="grid">
            <div class="case-thumb-image">
              <img
                src="https://res.cloudinary.com/dkcc5o1yv/image/upload/v1661806179/cocacola_ipo7q0.jpg"
                alt="Coca-Cola x Marshmello thumbnail"
                class="case-thumb-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Work",
};
</script>

<style scoped>
.work {
  position: relative;
}

.work-section {
  padding: 3rem 0;
  position: relative;
}

.case-thumb {
  position: relative;
}

.case-thumb-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
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

.case-thumb-text-wrap {
  position: relative;
  margin-bottom: 2rem;
}

.case-thumb-text {
  position: relative;
  z-index: 1;
}

.case-thumb-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.case-thumb-cta {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.case-thumb-cta-inner {
  position: relative;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 0.25rem;
}

.case-thumb-cta-inner::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.case-thumb-link:hover + .case-thumb-text-wrap .case-thumb-cta-inner::after {
  width: 100%;
}

.case-thumb-image {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.5s ease;
}

.case-thumb-img {
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.case-thumb-link:hover ~ .wrap .case-thumb-img {
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .work-section {
    padding: 5rem 0;
  }

  .grid {
    grid-template-columns: repeat(8, 1fr);
  }

  .case-thumb-text {
    grid-column: 2 / 7;
  }

  .case-thumb-image {
    grid-column: 3 / 8;
  }

  .case-thumb-title {
    font-size: 4rem;
  }

  /* Alternating layout */
  .work-section:nth-child(even) .case-thumb-text {
    grid-column: 5 / 8;
  }

  .work-section:nth-child(even) .case-thumb-image {
    grid-column: 2 / 6;
  }
}

@media (min-width: 1024px) {
  .work-section {
    padding: 7rem 0;
  }

  .grid {
    grid-template-columns: repeat(12, 1fr);
  }

  .case-thumb-text {
    grid-column: 3 / 7;
  }

  .case-thumb-image {
    grid-column: 4 / 10;
  }

  .case-thumb-title {
    font-size: 5rem;
  }

  /* Alternating layout */
  .work-section:nth-child(even) .case-thumb-text {
    grid-column: 7 / 11;
  }

  .work-section:nth-child(even) .case-thumb-image {
    grid-column: 3 / 9;
  }
}
</style>
