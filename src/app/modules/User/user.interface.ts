import { Document, Types } from 'mongoose';

// Define user role type
export type UserRole = 'admin' | 'user';

// Define user interface
export interface IUser extends Document {
  name: string; 
  email: string; 
  password: string; 
  phone: string; 
  role: UserRole; 
  address: string; 
}
