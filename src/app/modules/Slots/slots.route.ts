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
router.get("/services/slots", SlotControllers.getAllSlots);
router.get("/slots/availability", SlotControllers.getAvailableSlots);
router.get("/slots/:slotId", SlotControllers.getSingleSlot);
router.put("/slots/:slotId", SlotControllers.updateSlot);
router.delete("/slots/:slotId", SlotControllers.deleteSlot);

export const SlotsRoutes = router;
