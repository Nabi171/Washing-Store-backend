import express from "express";
import { SlotControllers } from "./slots.controller";

const router = express.Router();

router.post("/slots", SlotControllers.createSlot);
router.get("/slots", SlotControllers.getAllSlots);
router.get("/slots/:slotId", SlotControllers.getSingleSlot);
router.put("/slots/:slotId", SlotControllers.updateSlot);
router.delete("/slots/:slotId", SlotControllers.deleteSlot);

export default router;
