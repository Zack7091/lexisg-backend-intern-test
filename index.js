const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // ✅ Fix applied here

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Backend is working! Use POST /api/query");
});

const response = {
  answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988...",
  citations: [
    {
      text: "as the age of the deceased at the time of accident was held to be about 54–55 years...",
      source: "Dani_Devi_v_Pritam_Singh.pdf",
      link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/..."
    }
  ]
};

app.post("/api/query", (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});