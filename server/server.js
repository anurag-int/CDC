const express = require("express");
const app = express();
app.use(express.json());
const database = require("./config/database");
database.connect();
const dotenv = require("dotenv");
dotenv.config();
const recruiterRoutes = require("./routes/recruiter/User");
const PORT = process.env.PORT || 5000;



app.get("/", (req, res)=>{
    return res.json({
        success : true,
        message : `Your Server is up and running at ${PORT}`
    });
})

//routes
app.use("/api/v1/recruiter", recruiterRoutes);

app.listen(PORT, ()=>{
    console.log(`Server started at PORT ${PORT}`);
})

