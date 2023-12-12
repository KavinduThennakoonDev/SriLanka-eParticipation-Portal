const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;

app.use("/content", require("./routes/contentsRoute"));

app.use("/feedback", require("./routes/feedbackRoute"));

app.use("/search", require("./routes/searchRoute"));

app.use("/esearch", require("./routes/EventSearchroute"));

app.use("/allsearch", require("./routes/allsearchRoute"));

app.use("/event", require("./routes/eventsRoute"));

app.use("/gf", require("./routes/eventsRoute"));

app.use("/NewsandPressReleases", require("./routes/newspressReleaseRoute"));

app.use("/Newsletter", require("./routes/newsletterRoute"));

app.use("/gallery", require("./routes/photogalleryRoute"));

app.listen(port, () => {
  console.log(`Connected to backend. Listening on port ${port}`);
});
