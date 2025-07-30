const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');

const TestController = require("./controllers/Test");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST"],
    credentials: true
}))

app.use("/api/v1/test", TestController);

module.exports = app;
