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

const port = process.env.PORT;
const customerRoutes = require('./routes/CustomerRoute');
const driverRoutes = require('./routes/DriverRoute');
const orderRoutes = require('./routes/OrderRoute');

const connectDB = require('./config/db');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/customer', customerRoutes);
app.use('/api/driver', driverRoutes);
app.use('/api/order', orderRoutes)
const server = app.listen(port, () => console.info(`Server started on port ${port}`));

(configPath === './config/config.env') && console.warn("-- WARNING: Running development environment. NOT SAFE FOR TESTING. --");

module.exports = server;