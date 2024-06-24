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

const getAvailableSlotsFromDB = async (slots: ISlot[]): Promise<ISlot[]> => {
  const existingSlots = await Slot.find({
    startTime: { $in: slots.map((slot) => slot.startTime) },
  });
  const availableSlots = slots.filter(
    (slot) =>
      !existingSlots.find(
        (existingSlot) => existingSlot.startTime === slot.startTime
      )
  );
  return availableSlots;
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
  getAvailableSlotsFromDB,
  getSingleSlotFromDB,
  updateSlotIntoDB,
  deleteSlotFromDB,
};
