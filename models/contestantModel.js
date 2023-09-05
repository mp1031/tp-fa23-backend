const mongoose = require('mongoose');

const contestantsSchema = mongoose.Schema ( //used to track each contestant during /contestants POST route
    {
        contestantName: {
            type: String,
            required: [true, "Please enter the contestant's name"]
        },
        husbandName: {
            type: String,
            required: [true, "Please enter the husband's name"]
        },
        vocalRange: {
            type: Number,
            required: [true, "Please enter the contestant's vocal range"]
        },
        location: {
            type: Number,
            required: [true, "Please enter the husband's location"]
        }
    }
);

const Contestant = mongoose.model('Contestant', contestantsSchema); //create Contestant model

module.exports = Contestant;