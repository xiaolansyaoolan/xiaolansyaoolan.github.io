import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import App from "./App.vue";
import Home from "./views/Home.vue";

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
app.use(router);
app.use(store);
app.mount("#app");
