import { Types } from 'mongoose';

export interface IBooking {
  /**
   * The ObjectId of the service.
   */
  service: Types.ObjectId;

  /**
   * The date of the booking in the format YYYY-MM-DD.
   */
  date: string;

  /**
   * The start time of the booking in the format HH:MM.
   */
  startTime: string;

  /**
   * The end time of the booking in the format HH:MM.
   */
  endTime: string;
}
