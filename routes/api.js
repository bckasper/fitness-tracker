const router = require("express").Router();
const Workout = require('../models/workout')

// get workouts
router.get("/api/workouts", (request, response) => {
    db.Workout.find({})
        .then(workout =>{response.json(workout)})
        .catch(err => {response.status(400).json(err)})
});

// create another workout
router.post('/',({body}, response) =>{
    db.Workout.create(body)
        .then(workout => {response.json(workout)})
})