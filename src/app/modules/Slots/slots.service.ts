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
const getAvailableSlotsFromDB = async (
  date?: string,
  serviceId?: string
): Promise<ISlot[]> => {
  const result = await Slot.find().populate("");
  return result;
};

export const SlotServices = {
  createSlotIntoDB,
  getAvailableSlotsFromDB,
};
