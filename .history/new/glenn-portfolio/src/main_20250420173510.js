import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import App from "./App.vue";
import Home from "./views/Home.vue";
import "./assets/main.css"; // 添加导入CSS样式

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// 创建状态管理
const store = createStore({
  state() {
    return {
      theme: "normal", // 'normal' 或 'neon'
    };
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "normal" ? "neon" : "normal";
    },
  },
});

// 创建Vue应用
const app = createApp(App);

// 全局属性和方法
app.config.globalProperties.$scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// 使用路由和状态管理
app.use(router);
app.use(store);

// 挂载应用
app.mount("#app");
