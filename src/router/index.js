import { createRouter, createWebHistory } from "vue-router";
import PortadaView from "../views/PortadaView.vue";
import PrimeroView from "../views/PrimeroView.vue";
import SegundoView from "../views/SegundoView.vue";
import TerceroView from "../views/TerceroView.vue";
import CalendarizacionView from "../views/CalendarizacionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Portada",
      component: PortadaView,
    },
    {
      path: "/ComputoI",
      name: "Computo I",
      component: PrimeroView,
    },
    {
      path: "/ComputoII",
      name: "Computo II",
      component: SegundoView,
    },
    {
      path: "/ComputoIII",
      name: "Computo III",
      component: TerceroView,
    },
    {
      path: "/Calendarizacion",
      name: "Calendarizacion",
      component: CalendarizacionView,
    },
  ],
});

export default router;
