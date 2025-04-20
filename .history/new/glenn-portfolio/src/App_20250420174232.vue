<template>
  <div
    id="app"
    :class="{
      'is-loaded': isLoaded,
      'is-dark': isDarkMode,
      'is-scrolling': isScrolling,
      'is-firefox': isFirefox,
      'menu-is-open': menuOpen,
      'is-scroll-native': isScrollNative,
    }"
  >
    <!-- 背景 -->
    <div class="bg"></div>

    <!-- 加载器 -->
    <div class="loader">
      <div class="loader-bg"></div>
      <div class="loader-inner wrap">
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <div class="loader-icon">
              <div class="loader-icon-background"></div>
              <div class="loader-icon-clip">
                <!-- 加载图标 -->
              </div>
            </div>
          </div>
          <div class="col-span-8 lg:block hidden">
            <div class="loader-text">
              <div class="loader-text-part">
                <div class="loader-text-part-inner">GLENN</div>
              </div>
              <div class="loader-text-part">
                <div class="loader-text-part-inner">CATTEEUW</div>
              </div>
            </div>
          </div>
        </div>
        <div class="loader-progress">
          <div class="wrap">
            <div class="grid grid-cols-12">
              <div class="col-span-4">
                <span class="loader-progress-loaded">0</span>%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 移动菜单 -->
    <div class="mobile-menu">
      <div class="mobile-menu-button">
        <div class="mobile-menu-button-icon"></div>
        <div class="mobile-menu-button-label">Menu</div>
      </div>
      <div class="mobile-menu-content">
        <div class="wrap">
          <div class="mobile-menu-ul">
            <a data-menu="about" class="mobile-menu-a">
              <div class="mobile-menu-a-label">About</div>
              <div class="mobile-menu-a-hover"></div>
            </a>
            <a data-menu="services" class="mobile-menu-a">
              <div class="mobile-menu-a-label">Services</div>
              <div class="mobile-menu-a-hover"></div>
            </a>
            <a data-menu="work" class="mobile-menu-a">
              <div class="mobile-menu-a-label">Work</div>
              <div class="mobile-menu-a-hover"></div>
            </a>
            <a data-menu="contact" class="mobile-menu-a">
              <div class="mobile-menu-a-label">Contact</div>
              <div class="mobile-menu-a-hover"></div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- WebGL特效 -->
    <div class="gl">
      <canvas></canvas>
    </div>

    <!-- 主要内容区 -->
    <router-view />

    <!-- 主菜单 -->
    <div class="menu">
      <div class="wrap">
        <div class="grid grid-cols-12">
          <div class="col-span-12">
            <div class="flex justify-end">
              <a data-menu="about" class="menu-a mr-12">
                <div class="menu-a-label">About</div>
                <div class="menu-a-hover">
                  <!-- SVG内容 -->
                </div>
              </a>
              <a data-menu="services" class="menu-a mr-12">
                <div class="menu-a-label">Services</div>
                <div class="menu-a-hover">
                  <!-- SVG内容 -->
                </div>
              </a>
              <a data-menu="work" class="menu-a mr-12">
                <div class="menu-a-label">Work</div>
                <div class="menu-a-hover">
                  <!-- SVG内容 -->
                </div>
              </a>
              <a data-menu="contact" class="menu-a">
                <div class="menu-a-label">Contact</div>
                <div class="menu-a-hover">
                  <!-- SVG内容 -->
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 混合模式特效层 -->
    <div class="gl-blend-1"></div>
    <div class="gl-blend-2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      isDarkMode: false,
      isScrolling: false,
      isFirefox: false,
      menuOpen: false,
      isScrollNative: false,
    };
  },
  mounted() {
    // 检测Firefox浏览器
    this.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

    // 模拟加载完成
    setTimeout(() => {
      this.isLoaded = true;
    }, 1500);

    // 绑定滚动事件
    window.addEventListener("scroll", this.handleScroll);

    // 绑定移动菜单按钮事件
    document
      .querySelector(".mobile-menu-button")
      .addEventListener("click", this.toggleMenu);

    // 主菜单项点击事件
    const menuItems = document.querySelectorAll(".menu-a, .mobile-menu-a");
    menuItems.forEach((item) => {
      item.addEventListener("click", this.handleMenuClick);
    });
  },
  methods: {
    handleScroll() {
      this.isScrolling = window.scrollY > 50;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleMenuClick(e) {
      const section = e.currentTarget.getAttribute("data-menu");
      this.$scrollTo(section);
      this.menuOpen = false;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
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
