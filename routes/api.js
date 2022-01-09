const router = require("express").Router();
const Workout = require('../models/workout')

// get workouts
router.get("/api/workouts", (request, response) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
            }
    }])
    .then((database) => {
        response.json(database);        
    })
    .catch((error) => {
        response.status(400).json(error);
    });
});


// create another workout
router.post("/api/workouts",({body}, response) =>{
    console.log(`Body: ${body}`)
    console.log(`Body: ${response}`)
    Workout.create(body)
        .then(workout => {
            response.json(workout)
        })
        .catch((error) => {response.status(400).json(error)})
})

module.exports = router