const mongoose = require("mongoose");

const db = process.env.DB;
console.log(db)

const dbconnection = async () => {
    try {
        await mongoose.connect(db);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
module.exports=dbconnection