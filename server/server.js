const express = require("express");
const app = express();
app.use(express.json());
const database = require("./config/database");
database.connect();
const dotenv = require("dotenv");
dotenv.config();
const recruiter_routes = require("./routes/recruiter/User");
const candidate_routes = require("./routes/candidate/User");
const PORT = process.env.PORT || 5000;



app.get("/", (req, res)=>{
    return res.json({
        success : true,
        message : `Your Server is up and running at ${PORT}`
    });
})

//routes
app.use("/api/v1/recruiter", recruiter_routes);
app.use("/api/v1/candidate", candidate_routes);

app.listen(PORT, ()=>{
    console.log(`Server started at PORT ${PORT}`);
})

