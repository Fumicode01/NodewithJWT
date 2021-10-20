const express = require("express");
const app = express();
const mongoose = require("mongoose");

// conect DB
mongoose.connect("mongodb+srv://fumi:Fumi1102@cluster0.48qtj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
()=> console.log("connected to DB!"));

// Import Routes
const authRoute = require("./routes/auth");

// Route Middleware
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server Up and running"));
