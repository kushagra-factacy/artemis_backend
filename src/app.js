import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true
}))

app.use(express.json({limit: "50kb"}))

app.use(express.urlencoded({extended: true,limit: "16kb"}))

app.use(express.static("public"))

app.use(cookieParser())

 
port = process.env.PORT || 5003

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});

