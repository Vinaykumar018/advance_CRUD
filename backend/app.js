const express = require("express");
const port = 8020;
const app = express();
const auth = require("./routes/auth")
app.use(express.json())
const cors = require("cors")
const list = require("./routes/list")
app.use(cors({
    origin: "*",  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
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
