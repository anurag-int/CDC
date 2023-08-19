const express = require("express");
const app = express();
const PORT = 3000;



app.get("/", (req, res)=>{
    console.log("Hello OPJU");
})

app.listen((req, res)=>{
    console.log(`server started at PORT ${PORT}`);
})

