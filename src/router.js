import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddRestaurant from "./components/AddRestaurant";
import UpdateRestaurant from "./components/UpdateRestaurant";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    component: Home,
    path: "/",
  },
  {
    name: "login",
    component: Login,
    path: "/login",
  },
  {
    name: "signup",
    component: Signup,
    path: "/signup",
  },
  {
    name: "add",
    component: AddRestaurant,
    path: "/add",
  },
  {
    name: "update",
    component: UpdateRestaurant,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
