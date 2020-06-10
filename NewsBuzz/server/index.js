const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const route = require("./routes/routes");
var cors = require("cors");

// mongoose.connect("mongodb://localhost/newsbuzz", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect("mongodb+srv://hussnainkhilgi1:Pakistan@123@cluster0-011rc.mongodb.net/Newsbuzz?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/", route);

// app.use("/api/mews", read);
// app.use("/api/scholarship/bachulars", read);

app.listen(9000, function () {
  console.log("server is running at post localhost:9000");
});
