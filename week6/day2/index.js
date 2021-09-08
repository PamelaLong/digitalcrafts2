const express = require("express");
const app = express();
const PORT = 3002;
const students = 
    {name: "Pamela"};
    {name: "Bernie"};
    {name: "Desiree'"};


const es6Renderer = require("express-es6-template-engine");
app.engine('html', es6Renderer),
app.set('views', 'templates'),
app.set('view engine', 'html'),


app.get("/",(req, res) => {
    res.render("home", {
        locals: {
            students,
        },
    })
});
app.listen(PORT, console.log(`Listening on port ${PORT}`));
