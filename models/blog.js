const mongoose = require("mongoose");
const Schema = mongoose.Schema;

    // define Database Object Schema

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

// Export schema model for use
module.exports = mongoose.model("Blog", blogSchema);