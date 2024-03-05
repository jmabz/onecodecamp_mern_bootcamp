require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

const app = express();
// Middleware
app.use(express.json());

// Routes
app.use("/api/posts", require("./src/views/post"));

const main = async () => {
    try {
        await mongoose.connect(mongoUri);
        app.listen(port, () => {
            console.log(`App listening at port ${port}, and connected to MongoDB.`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB: ", error);
    }
}

main();