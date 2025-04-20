<template>
  <div id="app" :class="{ 'theme-neon': isNeonTheme }">
    <div class="bg"></div>
    <router-view />
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
</style>
