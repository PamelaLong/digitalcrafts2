const express = require("express");
const app = express();
// const creds = require("");

const PORT = 5432;
// middleware
// all our req get converted into json
app.use(express.json());


//CREATE
app.post("/create_resturants", (req,res) => {
    res.send("create_resturants");
});

app.post("/create_movies", (req,res) => {
    res.send("create_movies");
});

//READ
app.get("/get_resturants", (req,res) => {
    res.send("get_resturants");
});

app.get("/get_movies", (req,res) => {
    res.send("get_movies");
});

app.post("/getUserData", (req, res) => {
    res.send(req.body);
    creds.connect((err, client, release) => {
        if (err) {
            return console.error("Error getting connected to the client", err.stack);
        }
    
    client.query`(INSERT INTO users (id,name,street, zipcode,city), VALUES ("${req.body.id}","${req.body.name}","${req.body.street}","${req.body.zipcode}","${req.body.city}")`, (err, result) => {
        if (err) {
            res.status(400).send(err.stack);
        }
            res.status(200).send(result.rows);
        };
    });

});

app.listen(PORT, console.log(`Listening on port ${PORT}`));