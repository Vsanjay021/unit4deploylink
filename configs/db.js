const mongoose=require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();
const connection=mongoose.connect("mongodb+srv://sanjayv:sanjay@cluster0.9ycsbw8.mongodb.net/unit4project?retryWrites=true&w=majority");

module.exports={
    connection
}
