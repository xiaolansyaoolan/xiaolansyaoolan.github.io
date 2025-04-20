<template>
  <div id="app" :class="{ 'theme-neon': isNeonTheme }">
    <div class="bg"></div>
    <div data-chunk="gl" class="gl"></div>
    <div class="gl-tiles fixed top-0 left-0">
      <div class="wrap">
        <div class="gl-tile">
          <div class="gl-tile-inner"></div>
        </div>
      </div>
    </div>
    <div data-router-wrapper>
      <div data-router-view="home">
        <router-view />
      </div>
    </div>
    <div class="gl-front hidden lg:block fixed h-full w-full top-0 left-0 pointer-events-none"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isNeonTheme() {
      return this.$store.state.theme === "neon";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

:root {
  --bg-color: #1c1c1c;
  --text-color: #ffffff;
  --primary-color: #ffffff;
  --secondary-color: #404040;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  z-index: -1;
}

.theme-neon {
  --bg-color: #000000;
  --text-color: #00ffff;
  --primary-color: #ff00ff;
  --secondary-color: #00ff00;
}

/* 通用样式 */
.wrap {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.flex {
  display: flex;
}

.justify-end {
  justify-content: flex-end;
}

.uppercase {
  text-transform: uppercase;
}

.font-bold {
  font-weight: 700;
}

.text-16 {
  font-size: 1rem;
}

.w-full {
  width: 100%;
}

.block {
  display: block;
}

.overflow-hidden {
  overflow: hidden;
}

.leading-md {
  line-height: 1.5;
}

.cursor-pointer {
  cursor: pointer;
}

.grid {
  display: grid;
}

/* 仅保留特定样式，其他由bundle.css提供 */
.gl {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.fixed {
  position: fixed;
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.hidden {
  display: none;
}

@media (min-width: 1024px) {
  .lg\:block {
    display: block;
  }
}

.h-full {
  height: 100%;
}

.w-full {
  width: 100%;
}

.pointer-events-none {
  pointer-events: none;
}
</style>
