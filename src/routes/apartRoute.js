import ApartmentModel from "../models/apartments.js";
import express from "express";

const router = express.Router();

// Create a new apartment listing
router.post("/api/create_apartment", async (req, res) => {
  try {
    const {
      whichAction,
      userOwnerId,
      apType,
      apCity,
      apStreet,
      numOfRooms,
      parkingNum,
      moreDesc,
      builtInMeter,
      price,
      availDate,
      apImages,
      ownerName,
      ownerPhone,
    } = req.body;

    const newApartment = new ApartmentModel({
      whichAction,
      userOwnerId,
      apType,
      apCity,
      apStreet,
      numOfRooms,
      parkingNum,
      moreDesc,
      builtInMeter,
      price,
      availDate,
      apImages,
      ownerName,
      ownerPhone,
    });

    const savedApartment = await newApartment.save();
    res.status(201).json(savedApartment);
  } catch (error) {
    console.error("Error creating apartment listing:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all apartment listings
router.get("/api/get_all_apartments", async (req, res) => {
  try {
    const apartments = await ApartmentModel.find();
    res.status(200).json(apartments);
  } catch (error) {
    console.error("Error fetching apartment listings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
