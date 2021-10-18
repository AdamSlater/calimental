import Vue from "vue";
import VueRouter from "vue-router";
import Skill from "../views/Skills.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/skills/push",
  },
  {
    path: "/skills/:skill",
    name: "Skill",
    component: Skill,
  },
  {
    path: "/skills/",
    name: "EmptySkill",
    redirect: "/skills/push",
  },
  {
    path: "*",
    name: "404",
    redirect: "/skills/push",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "is-active",
});

export default router;
