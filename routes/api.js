const router = require("express").Router();
const Workout = require('../models/workout.js')


router.get("/api/workouts", (request, response) => {
    db.Workout.find({})
        .then(workout =>{response.json(workout)})
        .catch(err => {response.status(400).json(err)})
})