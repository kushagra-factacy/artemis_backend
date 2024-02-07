import express from 'express' ;


const app = express()

console.log(process.env.COSMOS_ENDPOINT);

const port=process.env.PORT || 5003 ;


app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})
 