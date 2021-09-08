// const cowsay = require("cowsay");
// const express = require("express");

// // invoking the function
// const app = express();

// // //first route: hello world
// app.get("/helloWorld", (req, res) => {
//     res.send((console.log("/helloWorld")));
// })
// app.listen(3000, console.log("Hello World!"));
// console.log(
//     cowsay.think({
//     text: "Hello World!",
//     e: "oO",
//     T: "U",
// }))
//second route:
// const cowsay = require("cowsay");
// const express = require("express");

// const app = express();

// app.get("/cats",(req, res) => {
//     res.send((console.log("/cats")));
// })
// app.listen(3000, console.log("Meow"));


//third one:
// const cowsay = require("cowsay");
// const express = require("express");

// const app = express();

// app.post("/dogs",(req, res) => {
//     res.send((console.log("/dogs")));
// })
// app.listen(3000, console.log("Woof"));

//forth one:
// const cowsay = require("cowsay");
// const express = require("express");

// const app = express();

// app.post("/cats_and_dogs",(req, res) => {
//     res.send((console.log("/cats_and_dogs")));
// })
// app.listen(3000, console.log("Dogs and cats living together...mass hysteria!!"));

const express = require("express");
const app = express();

app.get("/greet/:${Name}", (req, res) => {
    res.send(console.log(`greet, ${Name}!`))
})
app.listen(5500, console.log("Hello, ${Name}!"));