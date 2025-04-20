<template>
  <div class="page-wrap" style="opacity: 1">
    <div class="mobile-menu" data-chunk="mobile-menu">
      <div class="mobile-menu-content">
        <ul class="mobile-menu-ul">
          <li class="mobile-menu-li">
            <div class="mobile-menu-a" data-scroll-to="about" data-menu="about">
              <div class="mobile-menu-a-label">About</div>
              <div class="mobile-menu-a-hover">
                <img
                  src="assets/images/m-stroke-about.svg"
                  alt="stroke about"
                  class="lazyload"
                />
              </div>
            </div>
          </li>
          <li class="mobile-menu-li">
            <div
              class="mobile-menu-a"
              data-scroll-to="services"
              data-menu="services"
            >
              <div class="mobile-menu-a-label">Services</div>
              <div class="mobile-menu-a-hover">
                <img
                  src="assets/images/m-stroke-services.svg"
                  alt="stroke services"
                  class="lazyload"
                />
              </div>
            </div>
          </li>
          <li class="mobile-menu-li">
            <div class="mobile-menu-a" data-scroll-to="work" data-menu="work">
              <div class="mobile-menu-a-label">Work</div>
              <div class="mobile-menu-a-hover">
                <img
                  src="assets/images/m-stroke-work.svg"
                  alt="stroke work"
                  class="lazyload"
                />
              </div>
            </div>
          </li>
          <li class="mobile-menu-li">
            <div
              class="mobile-menu-a"
              data-scroll-to="contact"
              data-menu="contact"
            >
              <div class="mobile-menu-a-label">Contact</div>
              <div class="mobile-menu-a-hover">
                <img
                  src="assets/images/m-stroke-contact.svg"
                  alt="stroke contact"
                  class="lazyload"
                />
              </div>
            </div>
          </li>
        </ul>
        <!-- Mobile menu social links -->
      </div>
      <div class="mobile-menu-button">
        <div class="mobile-menu-button-icon"></div>
        <div class="mobile-menu-button-label">Menu</div>
      </div>
    </div>

    <div data-scroll>
      <Header />
      <Intro />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Intro from "@/components/Intro.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Work from "@/components/Work.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Intro,
    About,
    Services,
    Work,
    Contact,
  },
  mounted() {
    // 加载完成后
    document.addEventListener("DOMContentLoaded", () => {
      // 如果原始JS中有初始化代码，可以在这里调用
      if (window.initGl) {
        window.initGl();
      }
    });

    // 添加scroll事件监听
    window.addEventListener("scroll", this.handleScroll);

    // 移动菜单点击事件
    const menuButtons = document.querySelectorAll("[data-scroll-to]");
    menuButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const target = e.currentTarget.getAttribute("data-scroll-to");
        if (target) {
          this.$scrollTo(target);
        }
      });
    });
  },
  beforeUnmount() {
    // 移除scroll事件监听
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 处理滚动动画效果
      const sections = document.querySelectorAll("[data-scroll-item]");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

        if (isVisible) {
          section.classList.add("in-view");
        }
      });
    },
  },
};
</script>

<style scoped>
/* 大部分样式已经在bundle.css中 */
</style>
