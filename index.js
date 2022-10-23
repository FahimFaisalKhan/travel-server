const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const data = require("./data.json");
app.use(cors());
app.use("/images", express.static("images"));
app.get("/", (req, res) => {
  res.send("server running");
});
app.get("/places", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
