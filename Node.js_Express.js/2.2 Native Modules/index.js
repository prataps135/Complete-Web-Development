let fs = require("fs");

// fs.writeFile("message.txt", "Hello from Pratap", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File saved successfully");
// });

// fs.appendFile("./message.txt", "new line appended", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File saved successfully");
// });

fs.readFile("./message.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
