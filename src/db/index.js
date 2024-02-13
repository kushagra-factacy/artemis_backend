import { CosmosClient } from "@azure/cosmos";
import { heimdall,aka_search,cdb ,patent,aicite_ic,business_news} from "../constants.js";

const endpoint= process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
console.log(process.env.COSMOS_KEY);
const cosmosclient = new CosmosClient({endpoint,key});
export async function connect(db , con) {
    try{
        const { database } = await cosmosclient.databases.createIfNotExists({ id: db });
        const {container} = await database.containers.createIfNotExists({ id: con });
        return {container}

    }
    catch(error){
        console.log("error in connection" ,error);

    }
 }
  
 


