import { IBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingIntoDB = async (payload: IBooking): Promise<IBooking[]> => {
  const newBooking = await Booking.create(payload);
  const existingBookings = await Booking.find();
  const allBookings = [...existingBookings, newBooking];
  return allBookings;
};
const getAllBookingsFromDB = async () => {
  const result = await Booking.find();
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
