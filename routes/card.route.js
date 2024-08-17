import { Router } from "express";
import Card from "../models/Card.model.js";
const router = Router();

router.post("/add-card", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/get-cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/get-card/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const card = await Card.findOne({ title });
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ message: "Card not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
