// Get dependencies
const express = require("express");

const app = express();

// Point static path to dist
app.use(express.static("dist/public"));

app.get("/", (req, res) => {
  res.sendFile("dist/public/index.html");
});


const port = process.env.PORT || "3000";
app.set("port", port);


app.listen(app.get("port"), () => {
  console.log("Server is listening on port %d", app.get("port"));
});