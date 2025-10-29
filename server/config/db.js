const mongoose = require("mongoose");
require("dotenv").config();



mongoose.connect("mongodb+srv://imen:test@cluster0.k0dzfsw.mongodb.net/bloggingapp?appName=Cluster0")
.then(() => console.log("db connected"))
.catch(err => console.log(err));

module.exports = mongoose;
