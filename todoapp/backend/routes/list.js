const express = require("express");
const router = express.Router();
const List = require("../models/list");
const User = require("../models/user");

// Add a new list item
router.post("/add", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const listData = new List({ title, body, list: existingUser._id });
        await listData.save();

        existingUser.list.push(listData._id);
        await existingUser.save();

        res.status(200).json({ listData });
    } catch (error) {
        console.error("Error adding list item:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// Update an existing list item
router.put("/add/:id", async (req, res) => {
try {
        const { title, body } = req.body;
 const list = await List.findByIdAndUpdate(req.params.id, { title, body }, { new: true });

        if (!list) {
            return res.status(404).json({ message: "List item not found" });
        }

        res.status(200).json({ message: "Data updated successfully", list });
    } catch (error) {
        console.error("Error updating list item:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// Delete a list item
router.delete("/delete/:id", async (req, res) => {
    try {
        const list = await List.findByIdAndDelete(req.params.id);
        if (!list) {
            return res.status(404).json({ message: "List item not found" });
        }
        res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
        console.error("Error deleting list item:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// Get list items by user ID
router.get("/get/:id", async (req, res) => {
    try {
        const data = await List.find({ list: req.params.id });

        if (!data || data.length === 0) {
            return res.status(404).json({ message: "No list items found" });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching list items:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
