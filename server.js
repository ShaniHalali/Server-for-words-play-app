require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
// mongoDB
const connectDB = require("./config/db");
connectDB();


// middlewares
app.use(cors());
app.use(express.json());

// basic route to test server
app.get("/", (req, res) => {
    res.send("Words Game Server is running");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
