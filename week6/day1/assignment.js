//1st Put: cow name

// const cowsay = require("cowsay");
// const express = require("express");

// const app = express();

// app.put("/sendCowUserName", (req, res) =>{
//     res.send(

//     cowsay.think({
//     text: "Adding Cow User",
//     e: "oO",
//     T: "U",
// }))
// });
// app.listen(5500);

//2nd Put: cow appointment

// const cowsay = require("cowsay");
// const express = require("express");

// const app = express();

// app.put("/sendCowAppointment", (req, res) =>{
//     res.send(

//     cowsay.think({
//     text: "Setting Up Cow Appointment",
//     e: "oO",
//     T: "U",
// }))
// });
// app.listen(5500);

//1st Get: cow name

// const cowsay = require("cowsay");
// const express = require("express");

// const app = express();

// app.get("/getCowUserName", (req, res) =>{
//     res.send(

//     cowsay.think({
//     text: "Adding Cow User",
//     e: "oO",
//     T: "U",
// }))
// });
// app.listen(5500);

//2nd Get: cow appointment

// const cowsay = require("cowsay");
// const express = require("express");

// const app = express();

// app.get("/sendCowAppointment", (req, res) =>{
//     res.send(

//     cowsay.think({
//     text: "Setting Up Cow Appointment",
//     e: "oO",
//     T: "U",
// }))
// });
// app.listen(5500);

//Delete

const cowsay = require("cowsay");
const express = require("express");

const app = express();

app.delete("/deleteCowUser", (req, res) =>{
    res.send(console.log("Cow User Has Been Deleted"))
});
app.listen(5500);