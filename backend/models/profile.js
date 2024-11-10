import { Schema, model } from "mongoose";

const ProfileSchema = new Schema({
  name: String,
  role: String,
  location: String,
  skills: [String],
  photos: [String], // URLs of the photos
  equipment: [String],
  workSamples: [String], // URLs of editor's work samples
  createdAt: { type: Date, default: Date.now },
});

export default model("Profile", ProfileSchema);
