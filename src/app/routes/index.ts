import { ServiceRoutes } from './../modules/services/services.route';
import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },


];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
