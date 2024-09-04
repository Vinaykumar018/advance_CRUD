const express = require("express");

const app = express();
const port = process.env.PORT||8020;
app.use(express.json())
const cors = require("cors")
const list = require("./routes/list")
const auth = require("./routes/auth")


app.use(cors({
    origin: "*", methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization']
})
)
app.use("/api/v1", list)



// Assuming this file handles the connection to MongoDB
const db = require("./connection/connection");



app.use("/api", auth)



app.listen(port, () => {
    console.log("App is listening on port", port);
});
