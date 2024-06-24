import { Schema, model } from "mongoose";
import { ISlot } from "./slots.interface";

const slotSchema = new Schema<ISlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Slot = model<ISlot>("Slot", slotSchema);
