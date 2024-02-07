const express = require('express')

require('dotenv').config();

const app= express();
app.get('/',(req,res)=>{
    res.send("hello");
})
app.get('/new',(req,res)=>{
    console.log("new");
})
app.get('/newpost' , (req,res)=>{
    res.send("new project")
})

app.get('/newapi',(req,res)=>{
res.send("hello ");
})



app.listen(process.env.PORT ,()=>{
    console.log(`listening on on port ${process.env.PORT}`);
});

