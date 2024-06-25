import { SlotsRoutes } from "./../modules/Slots/slots.route";
import { ServiceRoutes } from "./../modules/services/services.route";
import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/services",
    route: ServiceRoutes,
  },
  {
    path: "/",
    route: SlotsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
