import { z } from "zod";

const createBookingValidationSchema = z.object({
  body: z.object({
    serviceId: z
      .string({
        invalid_type_error: "Service ID must be a string",
      })
      .nonempty("Service ID is required"),
    slotId: z
      .string({
        invalid_type_error: "Slot ID must be a string",
      })
      .nonempty("Slot ID is required"),
    vehicleType: z
      .string({
        invalid_type_error: "Vehicle type must be a string",
      })
      .nonempty("Vehicle type is required"),
    vehicleBrand: z
      .string({
        invalid_type_error: "Vehicle brand must be a string",
      })
      .nonempty("Vehicle brand is required"),
    vehicleModel: z
      .string({
        invalid_type_error: "Vehicle model must be a string",
      })
      .nonempty("Vehicle model is required"),
    manufacturingYear: z
      .number({
        invalid_type_error: "Manufacturing year must be a number",
      })
      .int("Manufacturing year must be an integer")
      .nonnegative("Manufacturing year must be a non-negative number")
      .max(
        new Date().getFullYear(),
        "Manufacturing year cannot be in the future"
      ),
    registrationPlate: z
      .string({
        invalid_type_error: "Registration plate must be a string",
      })
      .nonempty("Registration plate is required"),
  }),
});

const updateBookingValidationSchema = z.object({
  body: z.object({
    serviceId: z
      .string({
        invalid_type_error: "Service ID must be a string",
      })
      .optional(),
    slotId: z
      .string({
        invalid_type_error: "Slot ID must be a string",
      })
      .optional(),
    vehicleType: z
      .string({
        invalid_type_error: "Vehicle type must be a string",
      })
      .optional(),
    vehicleBrand: z
      .string({
        invalid_type_error: "Vehicle brand must be a string",
      })
      .optional(),
    vehicleModel: z
      .string({
        invalid_type_error: "Vehicle model must be a string",
      })
      .optional(),
    manufacturingYear: z
      .number({
        invalid_type_error: "Manufacturing year must be a number",
      })
      .int("Manufacturing year must be an integer")
      .nonnegative("Manufacturing year must be a non-negative number")
      .max(
        new Date().getFullYear(),
        "Manufacturing year cannot be in the future"
      )
      .optional(),
    registrationPlate: z
      .string({
        invalid_type_error: "Registration plate must be a string",
      })
      .optional(),
  }),
});

export const BookingValidation = {
  createBookingValidationSchema,
  updateBookingValidationSchema,
};
