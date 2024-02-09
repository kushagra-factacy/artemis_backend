

import dotenv from "dotenv"
dotenv.config({
    path: '/home/azureuser/backend/.env'
})


import express from 'express';

const app = express();
const port = process.env.PORT ;

console.log(process.env.PORT);

import  { connectcdbaka_search}  from "./db/index.js";


app.get('/hello',(req,res)=>{
    res.send("hello");
    console.log("hello");
})

app.get('/new' ,async(req,res)=>{
    try {
            const dbconnect= await connectcdbaka_search();
            const {resources} = await dbconnect.container.items.query("SELECT TOP 10 * FROM c").fetchAll();
            res.send(resources) 
            
        }
    
    catch(error){
        console.log("error" ,error);
    }
});

app.listen(port,()=>{
    console.log("listen");
});
