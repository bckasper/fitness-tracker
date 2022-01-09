const router = require("express").Router();
const Workout = require('../models/workout')

// get workouts
router.get("/api/workouts", (request, response) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
        }
    }])
    .then((db)=>{response.json(db)})
    .catch((error)=>{response.status(400).json(error)})
});

// create another workout
router.post('/api/workouts',({body}, response) =>{
    console.log(body)
    Workout.create(body)
    console.log("test")
        .then(workout => {
            response.json(workout)
            console.log(workout)
        })
        .catch((error) => {response.status(400).json(error)})
})