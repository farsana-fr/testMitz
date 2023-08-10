const express=require("express");
const cors=require('cors')
const app=express();
const logic=require('./logic')
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json());


app.listen(8000,()=>{
    console.log("Port 8000 running");
})

app.get('/getProductTab',(req,res)=>{
    logic.getProductTab().then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/getOrderTab',(req,res)=>{
    logic.getOrderTab().then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/getCustomerPrefTab',(req,res)=>{
    logic.getCustomerPrefTab().then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/getRes',(req,res)=>{
    logic.getRes().then(result=>{
        res.status(result.statusCode).json(result)
    })
})