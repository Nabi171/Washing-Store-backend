import { Types } from 'mongoose';

export interface IBooking {

  service: Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  
}
