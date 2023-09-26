const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB").then(() => {
  console.log("Connected to database");
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruits", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid fruit.",
});

// fruit.save();

const peaches = new Fruit({
  name: "Peaches",
  rating: 2,
  review: "Peaches are good.",
});

// peaches.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = new mongoose.model("person", personSchema);

const person1 = new Person({
  name: "Pratap",
  age: 24,
});

// person1.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!",
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me",
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture",
});

// Fruit.insertMany([kiwi, orange, banana])
//   .then(console.log("Fruits added successfully"))
//   .catch((err) => {
//     console.log(err);
//   });

Fruit.find()
  .then((fruits) => {
    // console.log(fruits);
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
    // mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });

// Fruit.updateOne(
//   { _id: "651290dabf8c181b2a9694ac" },
//   {
//     name: "Grapes",
//     review: "Most sweetest fruit",
//   }
// ).then(() => {
//   console.log("Update successfully");
// });

// Fruit.deleteOne({ _id: "651290dabf8c181b2a9694ac" })
//   .then(() => {
//     console.log("Deleted successfully!");
//     // mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Best for shakes",
});

// pineapple.save();

const personAmy = new Person({
  name: "Amy",
  age: 14,
  favoriteFruit: pineapple,
});

// personAmy.save();

Person.updateOne(
  { name: "Pratap" },
  {
    favoriteFruit: fruit,
  }
).then(() => {
  console.log("Update successfully!");
});
