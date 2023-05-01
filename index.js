const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
const chefInfo = require("./chefInfo.json")

app.get("/",(req,res)=> {

    res.json({message: "server is running"});
});

app.get("/alldata",(req,res)=>{
    res.send(chefInfo)
})


app.listen(5000, () => {
    console.log("server is running on port 5000");
});