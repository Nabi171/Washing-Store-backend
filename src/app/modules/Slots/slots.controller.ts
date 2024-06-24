import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SlotServices } from "./slots.service";

const createSlot = catchAsync(async (req, res) => {
  const result = await SlotServices.createSlotIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot is created successfully",
    data: result,
  });
});

const getAllSlots = catchAsync(async (req, res) => {
  const result = await SlotServices.getAllSlotsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots are retrieved successfully",
    data: result,
  });
});

const getSingleSlot = catchAsync(async (req, res) => {
  const { slotId } = req.params;
  const result = await SlotServices.getSingleSlotFromDB(slotId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot is retrieved successfully",
    data: result,
  });
});

const updateSlot = catchAsync(async (req, res) => {
  const { slotId } = req.params;
  const result = await SlotServices.updateSlotIntoDB(slotId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot is updated successfully",
    data: result,
  });
});

const deleteSlot = catchAsync(async (req, res) => {
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
  getSingleSlot,
  updateSlot,
  deleteSlot,
};
