import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorPage from "../views/ErrorPage.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import Units from "../views/UnitsView.vue";
import Unit from "../views/UnitView.vue";
import Lecturer from "../views/LecturerView.vue";
import Lecturers from "../views/LecturersView.vue";
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
    path: "/lecturers",
    name: "lecturers",
    component: Lecturers,
    meta: { requiresAuth: true },
  },
  {
    path: "/lecturer/:id(\\d+)",
    name: "lecturer",
    component: Lecturer,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/units",
    name: "units",
    component: Units,
    meta: { requiresAuth: true },
  },
  {
    path: "/unit/:id(\\d+)",
    name: "unit",
    component: Unit,
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: "/material/:id(\\d+)",
    name: "material",
    component: Material,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    name: "error",
    component: ErrorPage,
  },
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
