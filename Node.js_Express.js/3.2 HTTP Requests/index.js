import express from "express";

const app = express();
const server = 3000;

app.get("/", (req, res, next) => {
  res.send("<h1>Hello World</h1>");
  next();
});

app.get("/about", (req, res, next) => {
  res.send("<h1>About me</h1");
  next();
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us</h1");
});

app.listen(server, () => {
  console.log("Server is running on " + server);
});
