const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const app = express();

// Database connection
mongoose.connect("mongodb://localhost/motivation");

// Run this for all requests - Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Starting server
app.listen(8080, console.log("Success!"));
