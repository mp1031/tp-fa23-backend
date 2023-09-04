import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const masterKey = "somekey";

app.use(bodyParser.urlencoded({extended:true}));


app.post("/contestants", (req, res) => {

});

app.get("/contestants", (req, res) => {

});

app.get("/husbandCall/<contestantName>", (req, res) => {

});