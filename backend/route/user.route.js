// route/user.route.js
import express from "express";
import { signup ,login } from "../controllers/user.controller.js"; // Adjust the path to your controller

const router = express.Router();

// Define the signup route
router.post("/signup", signup);

router.post("/login", login);

export default router;
