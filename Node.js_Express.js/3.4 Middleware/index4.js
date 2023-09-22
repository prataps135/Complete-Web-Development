import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  let street = req.body.street;
  let pet = req.body.pet;

  res.send(`<h1>Your Band Name is</h1> <br> <h2>` + street + pet +"</h2>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
