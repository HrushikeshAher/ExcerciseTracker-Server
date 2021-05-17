const express = require("express")
const app = express()
require("./db/connection")
var cors = require('cors')



//Creating PORT for website
const PORT = process.env.PORT || 9000

//Middleware
app.use(express.json())
app.use(cors())

const userRouter = require("./route/users")
const excerciseRouter = require("./route/excercises")

app.use("/user",userRouter)
app.use("/excercise",excerciseRouter)

app.get("/",(req,res)=>{
    res.status(200).send("Home Page")
})
app.all("*",(req,res)=>{
    res.status(404).send("Page Not Found")
})
//Listening on port 9000
app.listen(PORT,()=> console.log(`Server is running on http://localhost:${PORT}`));