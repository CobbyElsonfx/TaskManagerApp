const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const dbConnect = require("./db/connect")
require("dotenv").config() //requre the .env file to enable us to have acces to the mongo-uri string

//middleware
app.use(express.json()); //without using this we wont have the data in req.body
app.use(express.static("./public"))
 

app.use("/api/v1/tasks",tasks );
app.use("/api/v1/tasks/:id", tasks)

 const start = async ()=>{            //in order to get the database connect before starting the servers 
    // se decedided to use async await function 
    try { 
        await dbConnect(process.env.MONGO_URI)
        app.listen(port , ()=>{
            console.log(`listening at port ${port} `)
        })   

    } catch (error) {
        console.log(error)
    }
 } 


 start()
