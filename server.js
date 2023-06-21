const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// dotenv config
dotenv.config();

// MongoDB connection
connectDB();

// Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(moragan("dev"));

// Routes
app.use('/api/v1/user', require("./routes/userRoutes"));

// Port
const port = process.env.PORT || 8080;

// Start server
app.listen(port, () => {
  console.log(colors.cyan.bgWhite(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`));
});
