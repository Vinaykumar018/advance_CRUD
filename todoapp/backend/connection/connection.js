const mongoose = require("mongoose");

const connect = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://kumarvinay15381:93367132@cluster0.lizzvyq.mongodb.net").then(() => {
            console.log("connected successfully")
        });

    } catch (err) {
        console.log("Not connected to DB:", err);
        res.status(500).send("Failed to connect to the database");
    }
};

module.exports = connect()
