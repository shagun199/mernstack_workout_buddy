const express = require("express");
const Workout = require("../models/workout");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Get All Workouts" });
});

router.get("/:ud", (req, res) => {
  res.json({ message: "Get one workout" });
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete("/:ud", (req, res) => {
  res.json({ message: "Delete one workout" });
});

router.patch("/:ud", (req, res) => {
  res.json({ message: "Updaing one workout" });
});

module.exports = router;
