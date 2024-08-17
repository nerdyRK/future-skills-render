import { Schema, model } from "mongoose";

const cardSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

export default model("Card", cardSchema);
