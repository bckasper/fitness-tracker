const router = require("express").Router();
const Workout = require('../models/workout');

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
    Workout.create({})
        .then((workout) => {
            response.json(workout)
        })
        .catch((error) => {response.status(400).json(error)})
})

// Update a workout
router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findOneAndUpdate(
        { id: params.id },
        { $push: { exercises: body }},
        { new: true }
    )
    .then((workout) => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router