const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const commen = [
  {
    username: "priyanka",
    comment: "how are you",
  },
  {
    username: "ramesh",
    comment: "yo guys!",
  },
  {
    username: "hika",
    comment: " that is funny",
  },
];

app.get("/comments", (req, res) => {
  res.render("home", { commen });
});
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  commen.push({ username, comment });
  console.log(req.body);
  res.redirect('/comments');
});
app.get("/comments/new", (req, res) => {
  res.render("newcommit");
});

app.listen(5002, () => {
  console.log("Server listening at port 5002");
});
