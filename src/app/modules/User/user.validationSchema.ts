import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string',
  }).email({ message: 'Invalid email address' }),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }).min(6, { message: 'Password must be at least 6 characters' })
   .max(20, { message: 'Password can not be more than 20 characters' }),
  phone: z.string({
    required_error: 'Phone number is required',
    invalid_type_error: 'Phone number must be a string',
  }).min(10, { message: 'Phone number must be at least 10 digits' })
   .max(15, { message: 'Phone number can not be more than 15 digits' }),
  role: z.enum(['admin', 'user'], {
    required_error: 'Role is required',
    invalid_type_error: 'Role must be either admin or user',
  }),
  address: z.string({
    required_error: 'Address is required',
    invalid_type_error: 'Address must be a string',
  }),
});

export const UserValidation = {
  userValidationSchema,
};
