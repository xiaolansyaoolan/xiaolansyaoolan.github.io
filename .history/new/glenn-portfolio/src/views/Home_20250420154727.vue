<template>
  <div class="home">
    <Header />

    <div class="page-wrap">
      <Intro />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>

    <Footer />
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
    // 添加scroll事件监听
    window.addEventListener("scroll", this.handleScroll);
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
.home {
  position: relative;
  overflow-x: hidden;
}

.page-wrap {
  opacity: 1;
  transition: opacity 0.5s ease;
}

[data-scroll-item] {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

[data-scroll-item].in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
