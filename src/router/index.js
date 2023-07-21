import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PlaceView from "../views/PlaceView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: AboutView,
  },
  {
    path: "/:id",
    name: "placeItem",
    component: PlaceView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
