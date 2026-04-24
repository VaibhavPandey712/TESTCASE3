const express = require("express");

const app = express();
const PORT = 8080;

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});