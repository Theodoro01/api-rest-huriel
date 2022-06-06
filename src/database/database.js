const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

function connectToDatabase(){
    mongoose.connect(process.env.DATABASE_URL);
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to the database!"));
}

module.exports = connectToDatabase;