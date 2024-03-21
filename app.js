const express = require('express');
const app = express();
const user = require('./users');
const cors = require("cors");
const body_parser = require("body-parser");

app.use(body_parser.json())

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/",function(req,res){
    res.send("Hello from Home :)");
})

app.post("/add", async (req,res)=>{
    try{

        const TravelData = new user({
            source : req.body.source,
            destination : req.body.destination,
            duration: req.body.duration,
            dtype :req.body.dtype,
            tmode: req.body.tmode,
            fdestination: req.body.fdestination,
            hotel :req.body.hotel,
        })
    const register = await TravelData.save();
    res.status(201);
    }
     catch(e){
        res.send(e);
     }
})

app.get("/data",async function(req,res){
    const data = await user.find();
    res.send(data);
})

app.get("/data/:id",async (req,res)=> {
    try{
        const _id = req.params.id;
        const getUser = await user.findById({_id});
        res.send(getUser);

    }
    catch(e)
    {
        req.status(400).send(e)
    }
})

app.put("/data/:id",async (req,res)=> {
    try{
        const _id = req.params.id;
        const getUser = await user.findByIdAndUpdate(_id,req.body,{
            new :true,
        });
        res.send(getUser);
    }
    catch(e)
    {
        req.status(500).send(e)
    }
})

app.delete("/data/:id",async (req,res)=> {
    try{
        const _id = req.params.id;
        const getUser = await user.findByIdAndDelete(_id);
        res.send(getUser);

    }
    catch(e)
    {
        req.status(500).send(e)
    }
})
app.listen(3000,() =>{
    console.log("server is running at 3000 ");
})