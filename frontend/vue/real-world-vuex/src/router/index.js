import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "@/views/EventDetails";
import About from "../views/About";
import Create from "../views/Create";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true, // send in route params as component props
    component: EventDetails
  },
  {
    path: "/about",
    name: "About",
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/create",
    name: "Create",
    component: Create
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
