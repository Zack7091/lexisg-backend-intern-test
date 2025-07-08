// Import
const express = require("express");
const cors = require("cors");

// Setup
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 👇 Ye GET route add karo yahan
app.get("/", (req, res) => {
  res.send("✅ Backend is working! Use POST /api/query");
});

// Simulated Response
const response = {
  answer:
    "Yes, under Section 166 of the Motor Vehicles Act, 1988...",
  citations: [
    {
      text: "as the age of the deceased at the time of accident was held to be about 54–55 years...",
      source: "Dani_Devi_v_Pritam_Singh.pdf",
      link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/...",
    },
  ],
};

// API Route
app.post("/api/query", (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }
  res.json(response);
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});