//jshint esversion:6

const express = require("express");
const app = express();

const Contestant = require('./models/contestantModel');

const mongoose = require('mongoose');   

const contestantsArray = [];

app.use(express.json());

app.get("/", async (req,res) => {
    res.send("HI");
});

app.post("/contestants", async (req, res) => {
    try {
        const new_contestant = await Contestant.create(req.body);
        contestantsArray.push({contestantName: req.body.contestantName, husbandName: req.body.husbandName});
        res.send(new_contestant);
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/contestants", async (req, res) => {
    try {
        res.send({pairs: contestantsArray});
    } catch (error) {
        console.log(error.message);
    }
});
    
app.get("/husbandCall/:nameOfContestant", async (req,res) => {
    try {
        const {nameOfContestant} = req.params;
        var my_score = 0;

        await Contestant.findOne({contestantName: nameOfContestant}).then((foundContestant) => {
            if (!foundContestant) {
                throw new Error("Contestant's name has not been registered!");
            } else {
                const vr = foundContestant.vocalRange;
                const hl = foundContestant.location;

                if (vr == hl) {
                    my_score = hl;
                } else if (vr > hl) {
                    my_score = Math.abs(vr - hl);
                } else {
                    throw new Error("The vocal range is less than the husband's location!");
                }
                res.send({score: my_score});
            }
          }).catch((err) => {
            console.log(err);
          });
    } catch (error) {
        console.log(error.message);
    }
});

mongoose.set("strictQuery", false);

mongoose.connect('mongodb+srv://shellywelly:MqeUFzbiOXk5FhMH@husbandcallingapi.cgqmhwn.mongodb.net/HusbandCallingAPI?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
}).catch((error) => {
    console.log(error);
});



