const express = require("express");

const mainRouter = require("./controllers");
const db = require("./config/connection");

const app = new express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);

db.once("open", () => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
