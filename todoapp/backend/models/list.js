const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    body: { type: String, required: true }, 
    list: [{
        type: mongoose.Types.ObjectId
        , ref:"list"
    }]
})
module.exports = mongoose.model("list", listSchema);
