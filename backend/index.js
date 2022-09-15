const express = require('express')
const MongoDBConnect = require('./config/db')
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv');
require("dotenv").config({ path: "./config/.env" });
const cors = require('cors');
const bodyParser = require('body-parser');
// ----------------------
// Database connect
MongoDBConnect()

// App initialise
const app = express()


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = app.listen(PORT, () => console.log(`Server port: ${PORT}`))

module.exports = server;