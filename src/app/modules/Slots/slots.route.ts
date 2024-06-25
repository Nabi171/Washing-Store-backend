import express from "express";
import { SlotControllers } from "./slots.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SlotValidation } from "./slots.validation";
const router = express.Router();

router.post(
  "/services/slots",
  validateRequest(SlotValidation.slotValidationSchema),
  SlotControllers.createSlot
);
router.get("/slots/availability", SlotControllers.getAvailableSlots);

export const SlotsRoutes = router;
