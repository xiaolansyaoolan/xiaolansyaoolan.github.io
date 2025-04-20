<template>
  <section id="contact" class="contact" data-scroll-item>
    <div class="wrap">
      <div class="grid">
        <div class="contact-title">
          <h2 class="label">
            <span class="label-inner">Get in touch</span>
          </h2>
        </div>

        <div class="contact-content">
          <a href="mailto:hello@glenncatteeuw.com" class="contact-mail">
            <div class="line">
              <div class="line-inner">
                <span>hello@</span>
              </div>
            </div>
            <div class="line">
              <div class="line-inner">
                <span>glenncatteeuw.com</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="grid socials-grid">
        <div class="socials-title">
          <div class="label">
            <span class="label-inner">Follow me</span>
          </div>
        </div>

        <div class="socials-links">
          <ul class="socials-ul">
            <li class="social-item">
              <a
                class="social-link"
                href="https://dribbble.com/glenncatteeuw"
                target="_blank"
                rel="noopener"
              >
                <span class="social-link-hover"></span>
                <div class="social-link-inner">dribbble</div>
              </a>
            </li>
            <li class="social-item">
              <a
                class="social-link"
                href="https://www.instagram.com/glenncatteeuw"
                target="_blank"
                rel="noopener"
              >
                <span class="social-link-hover"></span>
                <div class="social-link-inner">instagram</div>
              </a>
            </li>
            <li class="social-item">
              <a
                class="social-link"
                href="https://www.behance.net/glenncatteeuw"
                target="_blank"
                rel="noopener"
              >
                <span class="social-link-hover"></span>
                <div class="social-link-inner">behance</div>
              </a>
            </li>
            <li class="social-item">
              <a
                class="social-link"
                href="https://www.linkedin.com/in/glenncatteeuw"
                target="_blank"
                rel="noopener"
              >
                <span class="social-link-hover"></span>
                <div class="social-link-inner">linkedin</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  padding: 5rem 1rem 3rem;
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
  margin-bottom: 3rem;
}

.contact-title {
  margin-bottom: 1rem;
}

.label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: var(--text-color);
  opacity: 0.7;
}

.contact-mail {
  display: block;
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text-color);
  line-height: 1.2;
  transition: color 0.3s ease;
}

.contact-mail:hover {
  color: var(--primary-color);
}

.line {
  overflow: hidden;
}

.line-inner {
  display: inline-block;
  position: relative;
  transition: transform 0.3s ease;
}

.contact-mail:hover .line-inner {
  transform: translateY(-5px);
}

.socials-grid {
  margin-top: 5rem;
}

.socials-ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-item {
  margin-bottom: 1rem;
}

.social-link {
  position: relative;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text-color);
  padding-bottom: 0.25rem;
}

.social-link-hover {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.social-link:hover .social-link-hover {
  width: 100%;
}

@media (min-width: 768px) {
  .contact {
    padding: 7rem 1rem 5rem;
  }

  .grid {
    grid-template-columns: repeat(8, 1fr);
  }

  .contact-title {
    grid-column: 2 / 8;
  }

  .contact-content {
    grid-column: 2 / 8;
  }

  .contact-mail {
    font-size: 3rem;
  }

  .socials-title {
    grid-column: 2 / 4;
  }

  .socials-links {
    grid-column: 4 / 8;
  }

  .socials-ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .contact {
    padding: 9rem 1rem 7rem;
  }

  .grid {
    grid-template-columns: repeat(12, 1fr);
  }

  .contact-title {
    grid-column: 4 / 12;
  }

  .contact-content {
    grid-column: 4 / 12;
  }

  .contact-mail {
    font-size: 4rem;
  }

  .socials-title {
    grid-column: 4 / 5;
  }

  .socials-links {
    grid-column: 5 / 11;
  }
}
</style>
