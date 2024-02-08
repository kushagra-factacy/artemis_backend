import { CosmosClient } from "@azure/cosmos";
import { heimdall,aka_search } from "../constants";

export const connectDB = async ()=> {
    try{
        const endpoint= process.env.COSMOS_ENDPOINT;
        const key = process.env.COSMOS_KEY;
        const cosmosclient = new CosmosClient({endpoint,key});
        const { database } = await cosmosclient.databases.createIfNotExists({ id: heimdall });
        const {container} = await database.containers.createIfNotExists({ id: aka_search });


    }
    catch(error){
        console.log("error in connection" ,error);

    }
}


