const express = require("express");
const app = express();
const data = require("./data.json");

app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomObject = data[randomIndex];
  res.json(randomObject);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
