import { createWebHistory, createRouter } from "vue-router";

import Schedule from "./components/Schedule/Schedule.vue";
import Standing from "./components/Standing/Standing.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: ["/schedule", "/schedule/:year"],
      name: "Schedule",
      component: Schedule,
    },
    {
      path: "/standing",
      name: "Standing",
      component: Standing,
    },
  ],
});
export default router;
