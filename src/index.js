const express = require("express");
const mongoose = require("mongoose");

const connectToDatabase = require("./database/database");

connectToDatabase();

const app = express();
const router = require("./routes");

app.use(express.json())
app.use(router);

app.listen(3000, () => {
    console.log("Started at http://localhost:3000");
});   