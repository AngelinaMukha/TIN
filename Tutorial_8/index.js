const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.get("/", (req, res)=>{
    console.log('here!');
    res.sendStatus(500);
    res.send("hello, try one of this: /hello, /form, /formdata, /jsondata");
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());

app.get("/hello", (req, res) => {
    res.send("hello world");
});

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/formdata", (req, res) => {
    const fullName = req.body.fullName;
    const profile = req.body.profile;
    const mark = req.body.mark;

    res.render("formData", {fullName: fullName, profile: profile, mark: mark});
});

app.post("/jsondata", (req, res) => {
    const fullName = req.body.fullName;
    const profile = req.body.profile;
    const mark = req.body.mark;

    res.render("jsonDataResponse", {fullName: fullName, profile: profile, mark: mark});
});

 app.listen(3000);


