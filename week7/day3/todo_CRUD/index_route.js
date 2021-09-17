const Sequelize =  require("sequelize");
const {CRUDtodos}  = require("./models");
// console.log(CRUDtodos);
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

//create
// app.post("/create_todos", async (req, res) => {
//     const {LISTtodo} = req.body.LISTtodo
//     const newTodos = await CRUDtodos.create(LISTtodo);
// });

//read
// app.get("/get_todos", async (req, res) => {
//     const CRUDtodos = await CRUDtodos();
//     res.send(LISTtodo);
// });

//update
app.put("/put_todos", async (req, res) => {
    const CRUDtodos = await CRUDtodos();
    res.send(`List has been updated on ${CRUDtodos.LISTtodo}`);
});

//delete
// app.delete("/delete_todos", async (req, res) => {
//     const CRUDtodos = await CRUDtodos();
//     res.send(`Item has been deleted from ${CRUDtodos.LISTtodo}`);
// });
app.listen(PORT, console.log(`Listening on port ${PORT}`))