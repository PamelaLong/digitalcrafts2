const express = require("express");
const app = express();

// import { createClient } from '@supabase/supabase-js';
const supabaseKey = process.env.supabaseKey;
const supabaseUrl = process.env.supabaseUrl;


const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(require(supabaseUrl, supabaseKey));
const PORT = 5500;

// const {stockInfo, error} = supabase.from("week6Database").insert([req.stockInfo]);


app.post("/newStock", (req, res) => {    
    console.log(req.stockInfo);
});

// app.get()

// app.put()

// app.delete()





app.listen(PORT, console.log(`listening on ${PORT}`));