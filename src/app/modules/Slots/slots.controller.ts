import { Request, Response } from "express";
import httpStatus from "http-status";
import { SlotServices } from "./slots.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createSlot = catchAsync(async (req: Request, res: Response) => {
  const slot = req.body; // Expecting a single slot object
  const result = await SlotServices.createSlotIntoDB(slot);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Slots created successfully",
    data: result,
  });
});
const getAvailableSlots = catchAsync(async (req: Request, res: Response) => {
  const { date, serviceId } = req.query;
  const availableSlots = await SlotServices.getAvailableSlotsFromDB(
    date as string,
    serviceId as string
  );

  if (availableSlots.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Available slots retrieved successfully",
      data: availableSlots,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "No available slots found for the specified criteria",
      data: [],
    });
  }
});

export const SlotControllers = {
  createSlot,
  getAvailableSlots,
};
