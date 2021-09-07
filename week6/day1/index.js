const cowsay = require("cowsay");
const express = require("express");

// invoking the function
const app = express();

//first one:
// app.put("/hello world", (req, res) =>{
//     res.send((console.log("Hello world")));
// })
//first one part 2:
app.put("<h1>Hello world</h1>", (req, res) => {
    console.log(req);
    res.send("<h1>Hello world");
});

// // console.log(
// //     cowsay.think({
// //     text: "I'm a mooodlue",
// //     e: "oO",
// //     T: "U",
// // }))

app.listen(3000, console.log("Hello world"));

//second one:
// app.get("/cats",(req, res) => {
//     res.send((console.log("/cats")));
// })
// app.listen(3000, console.log("Meow"));

//third one:
// app.post("/dogs",(req, res) => {
//     res.send((console.log("/dogs")));
// })
// app.listen(3000, console.log("Woof"));

//forth one:
// app.post("/cats_and_dogs",(req, res) => {
//     res.send((console.log("/cats_and_dogs")));
// })
// app.listen(3000, console.log("Dogs and cats living together...mass hysteria!!"));