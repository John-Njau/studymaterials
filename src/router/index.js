import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorPage from "../views/ErrorPage.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import Unit from "../views/UnitView.vue";
import Lecturer from "../views/LecturerView.vue";
import Material from "../views/MaterialView.vue";
import Profile from "../views/ProfileView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/unit/:id",
    name: "unit",
    component: Unit,
    meta: { requiresAuth: true },
    props: true,
  },
  // {
  //   path: "/:catchAll(.*)",
  //   name: "error",
  //   component: ErrorPage,
  // },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/lecturer/:id",
    name: "lecturer",
    component: Lecturer,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/material/:id",
    name: "material",
    component: Material,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("login");
  } else {
    next();
  }
});

export default router;
