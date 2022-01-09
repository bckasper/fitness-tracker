const router = require("express").Router();
const Workout = require('../models/workout');

// get workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((workout) => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


// create a workout
router.post("/api/workouts",({body}, response) =>{
    Workout.create({})
        .then((workout) => {
            response.json(workout)
        })
        .catch((error) => {response.status(400).json(error)})
})

// Add a workout
router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(body)
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