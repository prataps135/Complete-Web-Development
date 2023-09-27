import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import _ from "lodash";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://prataps135:prataps135@cluster0.e7lobe4.mongodb.net/todoListDB").then(() => {
  console.log("connected successfully");
});

const itemSchema = new mongoose.Schema({
  name: String,
});

const Item = new mongoose.model("Item", itemSchema);

const item1 = new Item({
  name: "Welcome to your todolist!",
});
const item2 = new Item({
  name: "Hit the + button to add a new item.",
});
const item3 = new Item({
  name: "<-- hit this to delete the item.",
});

const defaultItems = [item1, item2, item3];

function addItems() {
  Item.insertMany(defaultItems)
    .then(() => {
      console.log("Items added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema],
});

const List = new mongoose.model("List", listSchema);

// let items = [];
// let workItems = [];
let lastDate;

app.get("/", function (req, res) {
  Item.find()
    .then((foundItems) => {
      if (foundItems.length === 0) {
        addItems();
        res.redirect("/");
      } else {
        res.render("index.ejs", {
          listTitle: "Today",
          newListItems: foundItems,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });

  // const now = new Date();
  // if (lastDate && now.getDate() !== lastDate.getDate()) {
  //   items = [];
  //   workItems = [];
  // }
  // lastDate = new Date();
  // const options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long",
  // };
  // const day = now.toLocaleDateString("en-US", options);
});

app.get("/:customListName", (req, res) => {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName })
    .then((list) => {
      if (!list) {
        const list = new List({
          name: customListName,
          items: defaultItems,
        });
        list.save();
        res.redirect(`/${customListName}`);
      } else {
        res.render("index.ejs", {
          listTitle: list.name,
          newListItems: list.items,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/", (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName })
      .then((foundList) => {
        foundList.items.push(item);
        foundList.save();
        res.redirect(`/${listName}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // if (req.body.list === "Work") {
  //   workItems.push(item);
  //   res.redirect("/work");
  // } else {
  //   items.push(item);
  //   res.redirect("/");
  // }
});

// app.get("/work", (req, res) => {
//   res.render("index.ejs", {
//     listTitle: "Work List",
//     newListItems: workItems,
//   });
// });
// app.post("/work", (req, res) => {
//   const item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

app.post("/delete", (req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndDelete({ _id: checkedItemId })
      .then(() => {
        console.log("Item deleted");
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } }
    )
      .then(() => {
        res.redirect(`/${listName}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
