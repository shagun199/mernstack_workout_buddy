const express = require("express");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Get All Workouts" });
});

router.get("/:ud", (req, res) => {
  res.json({ message: "Get one workout" });
});

router.post("/", (req, res) => {
  res.json({ message: "posting one workout" });
});

router.delete("/:ud", (req, res) => {
  res.json({ message: "Delete one workout" });
});

router.patch("/:ud", (req, res) => {
  res.json({ message: "Updaing one workout" });
});

module.exports = router;
