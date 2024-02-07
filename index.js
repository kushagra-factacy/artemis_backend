const express = require('express')

require('dotenv').config();

const app= express();
app.get('/',(req,res)=>{
    res.send("hello");
})
app.get('/new',(req,res)=>{
    console.log("new");
})



app.listen(process.env.PORT ,()=>{
    console.log(`listening on on port ${process.env.PORT}`);
});

