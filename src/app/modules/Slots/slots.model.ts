import { Schema, Types, model } from 'mongoose';
import { IBooking } from './slots.interface';
// import { IService } from './services.interface';

const BookingSchema:any = new Schema<IBooking>(
  {
    service: {
      type: 'ObjectID',
      required: true,
      ref:"Service"
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  },
);

export const BookingSchema = model<IBooking>('Booking', BookingSchema);
