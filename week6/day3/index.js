const express = require("express");
const app = express();

const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://mxakcphctxajogkuteth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY"
);

const port = 3001;

app.post("/createStudent", async (req, res) => {
    console.log(req.body);
    const { data, error } = await supabase.from("studentData").insert([req.body]);
  
    console.log(req.body);
    res.send(console.log(`the user is ${req.body.name}`));
  });


app.listen(PORT, console.log(`listening on ${PORT}`));