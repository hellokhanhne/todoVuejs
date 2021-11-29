import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Auth from "./pages/Auth.vue";
import Dashboard from "./pages/Dashboard.vue";
import About from "./pages/About.vue";
import store, { authData } from "./store";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: Auth,
    name: "Auth",
    children: [
      { path: "/login", name: "Login", component: Login },
      { path: "/register", name: "Register", component: Register },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { requiresAuth: true },
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authData.isAuthenticated) {
      if (localStorage.getItem("accessToken")) {
        try {
          await store.dispatch("checkToken");
          return next();
        } catch (error) {
          return next({ name: "Login" });
        }
      }
      return next({ name: "Login" });
    }
    return next();
  }
  return next();
});

export default router;
