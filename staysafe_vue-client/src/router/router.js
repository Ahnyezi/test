import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main/Main";
import NotFound from "@/views/NotFound/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
