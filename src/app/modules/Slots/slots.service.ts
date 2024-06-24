import { ISlot } from "./slots.interface";
import { Slot } from "./slots.model";

const createSlotIntoDB = async (payload: ISlot) => {
  const result = await Slot.create(payload);
  return result;
};

const getAllSlotsFromDB = async () => {
  const result = await Slot.find().populate("service");
  return result;
};

const getSingleSlotFromDB = async (id: string) => {
  const result = await Slot.findById(id).populate("service");
  return result;
};

const updateSlotIntoDB = async (id: string, payload: Partial<ISlot>) => {
  const result = await Slot.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).populate("service");
  return result;
};

const deleteSlotFromDB = async (id: string) => {
  const result = await Slot.findByIdAndDelete(id);
  return result;
};

export const SlotServices = {
  createSlotIntoDB,
  getAllSlotsFromDB,
  getSingleSlotFromDB,
  updateSlotIntoDB,
  deleteSlotFromDB,
};
