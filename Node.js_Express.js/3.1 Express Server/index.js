import express from "express";
const app = express();
const server = 3000;

app.listen(server, () => {
  console.log(`Server is running on ${server}`);
});
