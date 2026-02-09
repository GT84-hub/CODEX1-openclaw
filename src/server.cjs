const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Route 1
app.get("/", (req, res) => {
  res.status(200).send("<h1>OpenClaw is running ✅</h1>");
});

// Route 2
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, status: "healthy" });
});

// Route 3
app.get("/api/ping", (req, res) => {
  res.status(200).json({ pong: true, ts: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
