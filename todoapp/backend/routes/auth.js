const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcryptjs = require("bcryptjs");

// Register a new user
router.post("/register", async (req, res) => {
    try {
        const { email, password, username } = req.body;

        // Check if all required fields are provided
        if (!email || !password || !username) {
            return res.status(400).json({ message: "Please provide all required fields: email, password, and username" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists, please login instead" });
        }

        // Hash the password with a salt
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(password, salt);

        const user = new User({ email, password: hashedPassword, username });

        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
});

// User login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if all required fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide both email and password" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found, please sign up first" });
        }

        const isPasswordCorrect = bcryptjs.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        // Destructure and omit password from the response
        const { password: _, ...userDetails } = user._doc;

        res.status(200).json({ user: userDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
});

module.exports = router;
