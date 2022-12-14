const express = require("express");

require("dotenv").config();
const app = express();
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, res.method);
  next();
});

// console.log(process.env.MONGO_URI);

// Routes
app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 4000 !!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
