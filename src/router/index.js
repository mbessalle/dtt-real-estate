import { createRouter, createWebHashHistory } from "vue-router";
import HousesView from "../views/HousesView.vue";
import AboutView from "../views/AboutView.vue";
import HouseDetails from "../components/HouseDetails.vue";
import NewForm from "../components/NewForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HousesView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: "/housedetails/:id",
    name: "HouseDetails",
    component: HouseDetails,
    props: (route) => ({
      id: Number(route.params.id),
    }),
  },
  {
    path: "/new",
    name: "NewForm",
    component: NewForm,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
