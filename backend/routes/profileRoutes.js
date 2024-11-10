import { Router } from "express";
const router = Router();
import { create, findById } from "../models/ProfileRoutes";
import { upload } from "../controllers/uploadController";

// Create Profile
router.post("/", async (req, res) => {
  try {
    const profile = await create(req.body);
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload Photos
router.post("/:id/upload", upload.array("photos", 5), async (req, res) => {
  try {
    const profile = await findById(req.params.id);
    profile.photos = req.files.map((file) => file.path); // save Cloudinary URLs
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
