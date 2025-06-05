const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// middleware
// next() needs to be run in order for the code to continue running
// similar to generators
// physically written before get requests, etc
// app.use((req, res, next) => {
//   console.log("<h1>HELLOOOOO</h1>");
//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

// parses body
app.use(
  express.urlencoded({
    extended: false,
  })
);
// uses parsed body
app.use(express.json());

// browser refresh GET request
app.get("/", (req, res) => {
  res.send("getting root");
});

app.post("/profile", (req, res) => {
  // add req.body data
  console.log(req.body);
  // log out success
  res.send("success");
});

app.listen(3000);
