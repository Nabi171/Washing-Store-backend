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

const getSingleBookingFromDB = async (id: string) => {
  const result = await Booking.findById(id);
  return result;
};

const updateBookingIntoDB = async (id: string, payload: Partial<IBooking>) => {
  const result = await Booking.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
