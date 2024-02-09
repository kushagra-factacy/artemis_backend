import { CosmosClient } from "@azure/cosmos";
import { heimdall,aka_search,cdb ,patent,aicite_ic,business_news} from "../constants.js";

const endpoint= process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
console.log(process.env.COSMOS_KEY);
const cosmosclient = new CosmosClient({endpoint,key});
export async function connectcdbaka_search() {
    try{
        const { database } = await cosmosclient.databases.createIfNotExists({ id: cdb });
        const {container} = await database.containers.createIfNotExists({ id: aka_search });
        return {container}

    }
    catch(error){
        console.log("error in connection" ,error);

    }
 }
 export async function connect_heim_patent() {
    try{
        const { database } = await cosmosclient.databases.createIfNotExists({ id: heimdall });
        const {container} = await database.containers.createIfNotExists({ id: patent });
        return {container}

    }
    catch(error){
        console.log("error in connection" ,error);

    }
 }

 export async function connect_heim_aicite_ic() {
    try{
        const { database } = await cosmosclient.databases.createIfNotExists({ id: heimdall });
        const {container} = await database.containers.createIfNotExists({ id: aicite_ic });
        return {container}
    }
    catch(error){
        console.log("error in connection" ,error);

    }
 }
 
 
 


