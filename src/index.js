import { CosmosClient } from "@azure/cosmos";

import dotenv from "dotenv"
dotenv.config({
    path: './env'
})


import express from 'express';

const app = express();
const port = process.env.PORT ;

console.log(process.env.PORT);

import  { connectcdbaka_search}  from "/home/azureuser/backend/src/db/index.js";


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

/*
const endpoint= process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;

const client = new CosmosClient({endpoint,key});


(async()=>{
    try{
        const { database } = await CosmosClient.databases.createIfNotExists({ id: DATABASE1 });
        const {container} = await database.containers.createIfNotExists({ id: CON1 });
        
    }
    catch(error){
        console.error("ERROR",error)
        throw error
    }

    
})()
*/
