const mongoose = require("mongoose")
const Schema = mongoose.Schema

// schema for workout

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: 
        {
            type: {
                type: String,
                required: 'You must to enter a type of exercise'
            },
            name: {
                type: String,
                required: 'You must give the exercise a name'
            },
            duration: {
                type: Number                
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout