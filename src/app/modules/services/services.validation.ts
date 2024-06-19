import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Service name must be a string',
    }).nonempty('Service name is required'),
    description: z.string({
      invalid_type_error: 'Service description must be a string',
    }).nonempty('Service description is required'),
    price: z.number({
      invalid_type_error: 'Service price must be a number',
    }).nonnegative('Service price must be a non-negative number'),
    duration: z.number({
      invalid_type_error: 'Service duration must be a number',
    }).positive('Service duration must be a positive number'),
    isDeleted: z.boolean({
      invalid_type_error: 'Service isDeleted must be a boolean',
    }).optional(),
  }),
});

const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Service name must be a string',
    }).optional(),
    description: z.string({
      invalid_type_error: 'Service description must be a string',
    }).optional(),
    price: z.number({
      invalid_type_error: 'Service price must be a number',
    }).nonnegative('Service price must be a non-negative number').optional(),
    duration: z.number({
      invalid_type_error: 'Service duration must be a number',
    }).positive('Service duration must be a positive number').optional(),
    isDeleted: z.boolean({
      invalid_type_error: 'Service isDeleted must be a boolean',
    }).optional(),
  }),
});

export const ServiceValidation = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
