const express = require("express");
const router = express.Router();
const db = require("../models/workout");

router.get("/workouts", (req, res) => {
    db.find({}).sort({ date: -1 }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
    db.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post("/workouts", (req, res) => {
    db.create({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    })
});


module.exports = router;