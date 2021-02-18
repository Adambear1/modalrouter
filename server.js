require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// app.use("/api/subscribers", require("./routes/api/Subscribers"));
// app.use("/api/reviews", require("./routes/api/Reviews"));
// app.use("/api/booking", require("./routes/api/Booking"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});
