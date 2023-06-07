const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// Middlewares
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDb is Connected"))
    .catch((err) => console.log("Error", err));






app.listen(PORT, console.log(`Server is Running on Port: ${PORT}`));    