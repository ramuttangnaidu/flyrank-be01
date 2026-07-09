const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Backend server is running",
    timestamp: new Date().toISOString()
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello FlyRank!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});