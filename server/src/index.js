const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const app = express()
app.use(userRoutes)
app.use(express.json())
const connectDb= async()=> {
 try{
 const res = await mongoose.connect('mongodb://127.0.0.1:27017/taskmanagementDb');
 if(res) console.log('connected to mongodb')
 }catch(err){
 console.log(err)
 }
}
 
connectDb()
const port = 3000
 

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})