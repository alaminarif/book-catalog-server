const express = require("express");
const app = express();
const cors = require("cors");
const config = require("dotenv").config();
const UserRoute = require("./src/app/module/user/user.route");

app.use(cors());
app.use(express.json());

// const tourRouter = require("./routes/tours.routes");

app.use("/api/v1/user", UserRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
