import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidation } from "./booking.validation";
import { BookingControllers } from "./booking.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(BookingValidation.createBookingValidationSchema),
  BookingControllers.createBooking
);
router.get("/", BookingControllers.getAllBookings);

export const BookingRoutes = router;
