## How to create a full stack project from scratch


## server
- First Goal: Get the server listening on a port
    --Require all the tools you need
    --Define your port
    --Make your port listen
    --Test it in the console

-Second Goal: Plan out CRUD for your routes
    --C/ Create or INSERT something into your DB
    --R/ Read or SELECT all from your DB
    --U/ Update or UPDATE into your DB
    --D/ Delete or DELETE into your DB


## Database
-First Goal: Make your database
    --CREATE DATABASE <databasename> in your psql terminal
    --"\l" to show if your database was created

-Second Goal: Make your table with it's schema
    --Create your table name and columns using
    ```
    CREATE TABLE table_name(
        column1 datatype,
        column2 datatype,
        column3 datatype,
        ...
    );
    ```



## Client
-First Goal: Make a template for your front end
    --Input
    --Submit
    --Client side js fucntions


<!-- //CREATE
app.post("/create_todo", (req,res) => {
    res.send("create_todo");
});

//READ
app.get("/get_todo", (req,res) => {
    res.send("get_todo");
});

//UPDATE
app.put("/update_todo", (req,res) => {
    res.send("update_todo");
});

//DELETE
app.post("/delete_todo", (req,res) => {
    res.send("delete_todo");
});
app.listen(PORT, console.log(`Listening on port ${PORT}`)); -->