import { CosmosClient } from "@azure/cosmos";

import {express} from "express";

const app = express();
port = process.env.PORT ;

app.listen(port,()=>{
    console.log("listen");
});

import { connectDB } from "./db";



app.get('/new' ,(req,res)=>{
    try {
        (async ()=>{
            connectDB()
            const {resources} = await container.items.query("SELECT TOP 10 * FROM c").fetchALL();
            res.send(resources) 
        })();
    }
    catch(error){
        console.log("error" ,error);
    }
})



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
