import { Slot } from "./slots.model";
import { ISlot } from "./slots.interface";

const createSlotIntoDB = async (slotData: ISlot): Promise<ISlot[]> => {
  const { service, date, startTime, endTime } = slotData;

  const startHour = parseInt(startTime.split(":")[0], 10);
  const endHour = parseInt(endTime.split(":")[0], 10);

  const slotsToCreate = [];

  for (let hour = startHour; hour < endHour; hour++) {
    const slot = {
      service,
      date,
      startTime: `${String(hour).padStart(2, "0")}:00`,
      endTime: `${String(hour + 1).padStart(2, "0")}:00`,
      isBooked: "available",
    };
    slotsToCreate.push(slot);
  }

  const result = await Slot.insertMany(slotsToCreate);
  return result;
};

const getAllSlotsFromDB = async (): Promise<ISlot[]> => {
  const result = await Slot.find();
  return result;
};

const getSingleSlotFromDB = async (slotId: string): Promise<ISlot | null> => {
  const result = await Slot.findById(slotId).exec();
  return result;
};

const updateSlotIntoDB = async (
  slotId: string,
  slotData: Partial<ISlot>
): Promise<ISlot | null> => {
  const result = await Slot.findByIdAndUpdate(slotId, slotData, {
    new: true,
  }).exec();
  return result;
};

const deleteSlotFromDB = async (slotId: string): Promise<ISlot | null> => {
  const result = await Slot.findByIdAndDelete(slotId).exec();
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

export const SlotServices = {
  createSlotIntoDB,
  getAllSlotsFromDB,
  getSingleSlotFromDB,
  updateSlotIntoDB,
  deleteSlotFromDB,
  getAvailableSlotsFromDB,
};
