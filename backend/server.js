const express= require("express")
const app=express()
const mongoose=require("mongoose")
const routesUrls=require("./routes/routes")
const cors=require("cors")

mongoose.connect("ANANYA'S ORG - 2024-04-24",()=>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)

app.listen(4000,()=>console.log("server is up and running"))