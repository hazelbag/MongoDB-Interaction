const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
// Require the env config
require('dotenv').config();
// Set the app to use express
const app = express();
// Set the port for the app to use
const port = process.env.PORT || 4000;

app.use(cors());
// Used express.json() instead of body parser
app.use(express.json());
// Call the uri from the .env file, item contains a password and thus not added here
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
// Connect to mongoDB database using mongoose
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
// Require the routes item
const carsRouter = require('./routes/cars');
// Use the routes option
app.use('/cars', carsRouter);
// Listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
