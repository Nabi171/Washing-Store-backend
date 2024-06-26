import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validationSchema";
const router = express.Router();

router.post(
  "/signup",
  // validateRequest(UserValidation.userValidationSchema),
  UserController.createUser
);

export const UserRoutes = router;
