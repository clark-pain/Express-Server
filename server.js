const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Hello")
});

app.get("/contact", function(req, res){
  res.send("Contact me wherever");
});

app.get("/about", function(req, res){
  res.send("<h3>My name is Clark</h3><br><h4>I live in in the center of the earth</h4>")
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
