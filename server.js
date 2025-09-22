const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/save", (req, res) => {
  let enquiries = [];
  if (fs.existsSync("data.json")) {
    enquiries = JSON.parse(fs.readFileSync("data.json"));
  }
  enquiries.push(req.body);
  fs.writeFileSync("data.json", JSON.stringify(enquiries, null, 2));
  res.json({ message: "Saved" });
});

app.get("/api/data", (req, res) => {
  let enquiries = [];
  if (fs.existsSync("data.json")) {
    enquiries = JSON.parse(fs.readFileSync("data.json"));
  }
  res.json(enquiries);
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
