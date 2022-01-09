const router = require("express").Router();
const Workout = require('../models/workout')

// get workouts


// create another workout
router.post("/api/workouts",({body}, response) =>{
    console.log(body)
    Workout.create(body)
    console.log("test")
        .then(workout => {
            response.json(workout)
            console.log(workout)
        })
        .catch((error) => {response.status(400).json(error)})
})