// server.js (or app.js, index.js, etc.)
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js"; // Ensure correct path

const app = express();

app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.error("MongoDB connection error:", error));

// Middleware
app.use(express.json());

// Route Middleware
app.use("/api/books", bookRoute);
app.use("/api/user", userRoute); // Ensure this matches your route

// Start Server
app.listen(PORT, () => {
    console.log(`Development Server listening at http://localhost:${PORT}`);
});
