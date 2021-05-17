const mongoose = require("mongoose")
const URL = "mongodb+srv://test:test@cluster0.8hj4h.mongodb.net/excercise-tracker-api?retryWrites=true&w=majority"
mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})


const db = mongoose.connection

db.on('error',()=>console.log("Error occured while connecting to DB"))

db.on('open',()=>console.log("Connected Successfully to MongoDB Database"))