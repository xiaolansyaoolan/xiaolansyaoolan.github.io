<template>
  <header class="header">
    <div class="header-inner">
      <div class="brand w-full">
        <div class="wrap">
          <h1 class="brand-text leading-md flex">
            <span class="cursor-pointer block">
              <span class="block">
                <span class="brand-text-line overflow-hidden">
                  <span class="brand-text-line-inner">Portfolio of</span>
                </span>
                <span class="brand-text-line overflow-hidden">
                  <span class="brand-text-line-inner">Glenn</span>
                </span>
                <span class="brand-text-line overflow-hidden">
                  <span class="brand-text-line-inner">Catteeuw</span>
                </span>
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>

    <div class="menu">
      <div class="wrap">
        <div class="flex justify-end">
          <div class="text-right uppercase text-16 font-bold">
            <ul class="menu-ul">
              <li class="menu-li">
                <div class="menu-a" @click="scrollTo('about')">
                  <span class="menu-a-hover"></span>
                  <div class="menu-a-label">About</div>
                </div>
              </li>
              <li class="menu-li">
                <div class="menu-a" @click="scrollTo('services')">
                  <span class="menu-a-hover"></span>
                  <div class="menu-a-label">Services</div>
                </div>
              </li>
              <li class="menu-li">
                <div class="menu-a" @click="scrollTo('work')">
                  <span class="menu-a-hover"></span>
                  <div class="menu-a-label">Work</div>
                </div>
              </li>
              <li class="menu-li">
                <div class="menu-a" @click="scrollTo('contact')">
                  <span class="menu-a-hover"></span>
                  <div class="menu-a-label">Contact</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    scrollTo(id) {
      this.$scrollTo(id);
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header-inner {
  padding: 1.5rem;
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--text-color);
}

.brand-text-line {
  display: block;
  overflow: hidden;
}

.brand-text-line-inner {
  display: inline-block;
  transform: translateY(0);
  transition: transform 0.5s ease;
}

.menu {
  padding: 1.5rem;
}

.wrap {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.menu-ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.menu-li {
  margin-bottom: 0.5rem;
}

.menu-a {
  position: relative;
  cursor: pointer;
  padding: 0.25rem 0;
  display: inline-block;
}

.menu-a-label {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.menu-a-hover {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.menu-a:hover .menu-a-hover {
  width: 100%;
}

@media (min-width: 768px) {
  .menu-ul {
    flex-direction: row;
    gap: 2rem;
  }
}
</style>
