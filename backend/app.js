require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const line = require("@line/bot-sdk");
const cors = require("cors");

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get("/api/v1/unlink-richmenu", (req, res) => {
  client.unlinkRichMenuFromUser("Uebcfaddd7e0264268be3d5d709305d01");
  res.json({
    data: req.body,
  });
});

app.post("/api/v1/change-richmenu", (req, res) => {
  // save data in db
  const { userId } = req.body;
  client.linkRichMenuToUser(
    userId,
    "richmenu-4f327feab7e79a8f2baa0e96caf6c73f"
  );
  res.json({
    data: req.body,
  });
});

app.post("/api/v1/change-richmenu-user", (req, res) => {
  // save data in db
  const { userId } = req.body;
  client.linkRichMenuToUser(
    userId,
    "richmenu-5f56b0c7f74ed2eabfcd441ff8718a69"
  );
  res.json({
    data: req.body,
  });
});

app.listen(3000, () => {
  console.log("Ready on port 3000");
});
