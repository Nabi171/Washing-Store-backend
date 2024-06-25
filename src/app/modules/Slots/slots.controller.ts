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

const getAllSlots = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotServices.getAllSlotsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots are retrieved successfully",
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req: Request, res: Response) => {
  const { slots } = req.body;

  if (!Array.isArray(slots) || slots.length === 0) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Invalid or empty slots array" });
  }

  try {
    const availableSlots = await SlotServices.getAvailableSlotsFromDB(slots);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Available slots retrieved successfully",
      data: availableSlots,
    });
  } catch (error) {
    console.error("Error retrieving available slots:", error);
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Failed to retrieve available slots",
      data: null,
    });
  }
});

const getSingleSlot = catchAsync(async (req: Request, res: Response) => {
  const { slotId } = req.params;
  const result = await SlotServices.getSingleSlotFromDB(slotId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot is retrieved successfully",
    data: result,
  });
});

const updateSlot = catchAsync(async (req: Request, res: Response) => {
  const { slotId } = req.params;
  const result = await SlotServices.updateSlotIntoDB(slotId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot is updated successfully",
    data: result,
  });
});

const deleteSlot = catchAsync(async (req: Request, res: Response) => {
  const { slotId } = req.params;
  const result = await SlotServices.deleteSlotFromDB(slotId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot is deleted successfully",
    data: result,
  });
});

export const SlotControllers = {
  createSlot,
  getAllSlots,
  getAvailableSlots,
  getSingleSlot,
  updateSlot,
  deleteSlot,
};
