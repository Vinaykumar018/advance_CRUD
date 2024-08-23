const mongoose = require("mongoose");

const connect = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://udit012435:admin@cluster0.z3mlx.mongodb.net/userCredentials").then(() => {
            console.log("connected successfully")
        });

    } catch (err) {
        console.log("Not connected to DB:", err);
        res.status(500).send("Failed to connect to the database");
    }
};

module.exports = connect()
