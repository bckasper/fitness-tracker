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
router.post('/',({body}, response) =>{
    db.Workout.create(body)
        .then(workout => {response.json(workout)})
})