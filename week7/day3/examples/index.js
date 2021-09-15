const Sequelize =  require("sequelize");
const { Users } = require("./models");
console.log(Users);
const express = require("express");
const app = express();
const PORT = 3011;

app.use(express.json());

app.post("/create_users", async (req, res) => {
    const {firstName,lastName,email} = req.body
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;

    const newUser = await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
    };
    res.send(`Inserted New user with ${newUser.firstName} ${newUser.id}`);


    app.post("/get_users", async (req, res) => {
    const users = await Users.findAll();
    res.send(users)({
        
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));