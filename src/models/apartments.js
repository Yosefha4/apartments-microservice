import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema(
  {
    whichAction: {
      type: String,
      required: true,
    },
    userOwnerId: {
      type: String,
      required: true,
    },
    apType: {
      type: String,
      required: true,
    },
    apCity: {
      type: String,
      required: true,
    },
    apStreet: {
      type: String,
      required: true,
    },
    numOfRooms: {
      type: Number,
      required: true,
    },
    parkingNum: {
      type: Number,
      required: true,
    },
    moreDesc: {
      type: String,
      required: true,
    },
    builtInMeter: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    availDate: {
      type: String,
      required: true,
    },
    apImages: [
      {
        type: String,
      },
    ],
    ownerName: {
      type: String,
      required: true,
    },
    ownerPhone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("apartments", apartmentSchema);
